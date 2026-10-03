import ApiClient from "@/lib/axios";

export const getCsrfCookie = async (): Promise<void> => {
  await ApiClient.get("/sanctum/csrf-cookie");
};


export interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const RegisterUser = async (data: RegisterUserProps) => {
    await getCsrfCookie();
    return ApiClient.post("/auth/register", data);
};

export interface LoginUserProps {
    email: string;
    password: string;
}

export const LoginUser = async (data: LoginUserProps) => {
    await getCsrfCookie();
    return ApiClient.post("/auth/login", data);
};

export const LogoutUser = async () => {
    return ApiClient.post("/auth/logout");
};

export interface ResetPasswordProps {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export const ResetPassword = async (data: ResetPasswordProps) => {
    await getCsrfCookie();
    return ApiClient.post("/auth/reset-password", data)
}
