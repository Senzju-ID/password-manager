import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

type RetryConfig = InternalAxiosRequestConfig & {
  _csrfRetry?: boolean;
};

const ApiClient: AxiosInstance = axios.create({
  baseURL: "/_bridge",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

let csrfReady = false;
let csrfPromise: Promise<void> | null = null;

const isCsrfEndpoint = (url?: string) =>
  url?.includes("/sanctum/csrf-cookie") ?? false;

export const getCsrfCookie = (
  forceRefresh = false,
): Promise<void> => {
  if (csrfReady && !forceRefresh) {
    return Promise.resolve();
  }

  if (csrfPromise) {
    return csrfPromise;
  }

  csrfPromise = ApiClient.get("/sanctum/csrf-cookie")
    .then(() => {
      csrfReady = true;
    })
    .catch((error) => {
      csrfReady = false;
      throw error;
    })
    .finally(() => {
      csrfPromise = null;
    });

  return csrfPromise;
};

ApiClient.interceptors.request.use(async (config) => {
  const method = config.method?.toLowerCase();

  const requiresCsrf = ["post", "put", "patch", "delete"].includes(
    method ?? "",
  );

  if (requiresCsrf && !isCsrfEndpoint(config.url)) {
    await getCsrfCookie();
  }

  return config;
});

ApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config as RetryConfig | undefined;

    if (
      error.response?.status !== 419 ||
      !request ||
      request._csrfRetry ||
      isCsrfEndpoint(request.url)
    ) {
      return Promise.reject(error);
    }

    request._csrfRetry = true;

    try {
      await getCsrfCookie(true);
      return await ApiClient(request);
    } catch {
      return Promise.reject(error);
    }
  },
);

export default ApiClient;