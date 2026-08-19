import API from "./axios";


export const getCsrfCookie = async (): Promise<void> => {
    await API.get("/sanctum/csrf-cookie");
  }

export interface RegisterData {
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

export const registerUser = async (data: RegisterData) => {
  await getCsrfCookie();
  return API.post("/auth/register", data);
}