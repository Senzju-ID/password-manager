import axios, { AxiosInstance } from "axios";

export const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getCsrfCookie = async (): Promise<void> => {
  await API.get("/sanctum/csrf-cookie");
};
