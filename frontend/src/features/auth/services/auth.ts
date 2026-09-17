import { API, getCsrfCookie } from "@/lib/axios";

export interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const RegisterUser = async (data: RegisterUserProps) => {
    await getCsrfCookie();
    return API.post("/auth/register", data);
};

export interface LoginUserProps {
    email: string;
    password: string;
}

export const LoginUser = async (data: LoginUserProps) => {
    await getCsrfCookie();
    return API.post("/auth/login", data);
};

export const LogoutUser = async () => {
    await getCsrfCookie();
    return API.post("/auth/logout");
};
