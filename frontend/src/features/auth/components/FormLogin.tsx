"use client";
import { ButtonToggle } from "@/components";
import FormAuth from "./FormAuth";
import FormField from "./ui/FormField";

import { LoginUser, LoginUserProps } from "../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormLogin = () => {
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(
            formData.entries()
        ) as unknown as LoginUserProps;

        try {
            await LoginUser(data);
            alert("berhasil login");
            router.push("/dashboard");
        } catch (err) {
            alert("Error occurred while logging in:" + err);
        }
    };

    return (
        <FormAuth
            onSubmit={handleSubmit}
            PText="Welcome Back! Please login to your account."
        >
            {/* Email Input Field */}
            <FormField
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
            />
            {/* Password Input Field */}
            <FormField
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
            />
            {/* Submit Button Field */}
            <div className="mt-4">
                <ButtonToggle
                    type="submit"
                    className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
                >
                    Login
                </ButtonToggle>
            </div>
            {/* Dont Have Account Field */}
            <div className="mt-4 text-center select-none">
                <p className="text-sm text-primary/85">
                    {"Don't have an account?" + " "}
                    <Link
                        href="/auth/register"
                        className="text-accent hover:underline"
                    >
                        Register here
                    </Link>
                </p>
            </div>
            {/* Forgot Password Field */}
            <div className="select-none text-center">
                <Link
                    href="/auth/forgot-password"
                    className="text-sm text-accent hover:underline"
                >
                    Forgot your password?
                </Link>
            </div>
        </FormAuth>
    );
};

export default FormLogin;
