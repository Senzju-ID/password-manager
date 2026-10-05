import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const ApiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  withXSRFToken: true,

  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

let csrfPromise: Promise<void> | null = null;

const getCsrfCookie = async (): Promise<void> => {
  if (csrfPromise) {
    return csrfPromise;
  }

  csrfPromise = ApiClient.get("/sanctum/csrf-cookie")
    .then(() => undefined)
    .finally(() => {
      csrfPromise = null;
    });

  return csrfPromise;
};

ApiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _csrfRetry?: boolean })
      | undefined;

    if (
      error.response?.status === 419 &&
      originalRequest &&
      !originalRequest._csrfRetry
    ) {
      originalRequest._csrfRetry = true;

      await getCsrfCookie();

      return ApiClient(originalRequest);
    }

    return Promise.reject(error);
  },
);

export { getCsrfCookie };
export default ApiClient;
