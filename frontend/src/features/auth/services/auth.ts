import ApiClient from "@/lib/axios";

export interface RegisterUserProps {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginUserProps {
  email: string;
  password: string;
}

export interface ResetPasswordProps {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterUser = (data: RegisterUserProps) =>
  ApiClient.post("/auth/register", data);

export const LoginUser = (data: LoginUserProps) =>
  ApiClient.post("/auth/login", data);

export const LogoutUser = () =>
  ApiClient.post("/auth/logout");

export const ForgetPassword = (data: { email: string }) =>
  ApiClient.post("/auth/forgot-password", data);

export const ResetPassword = (data: ResetPasswordProps) =>
  ApiClient.post("/auth/reset-password", data);