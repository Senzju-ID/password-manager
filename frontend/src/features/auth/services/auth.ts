import ApiClient from "@/lib/axios";

export interface RegisterUserProps {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterUser = async (data: RegisterUserProps) => {
  return ApiClient.post("/auth/register", data);
};

export interface LoginUserProps {
  email: string;
  password: string;
}

export const LoginUser = async (data: LoginUserProps) => {
  return ApiClient.post("/auth/login", data);
};

export const LogoutUser = async () => {
  return ApiClient.post("/auth/logout");
};

export const ForgetPassword = async (data: { email: string }) => {
  return ApiClient.post("/auth/forgot-password", data);
};

export interface ResetPasswordProps {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const ResetPassword = async (data: ResetPasswordProps) => {
  return ApiClient.post("/auth/reset-password", data);
};
