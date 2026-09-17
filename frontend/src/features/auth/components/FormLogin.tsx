"use client";
import { ButtonToggle, Input } from "@/components";
import FormUiAuth from "./FormUiAuth";
import { LoginUser, LoginUserProps } from "../services/auth";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const FormLogin = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(
            formData.entries()
        ) as unknown as LoginUserProps;

        try {
            await LoginUser(data);
            alert("berhasil login");
            router.push("/dash");
        } catch (err) {
            alert("Error occurred while logging in:" + err);
        }
    };

    return (
        <FormUiAuth
            onSubmit={handleSubmit}
            PText="Welcome Back! Please login to your account."
        >
            {/* Email Input Field */}
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm text-primary/85 font-medium mb-1.5 select-none"
                >
                    Email
                </label>
                <div className="relative">
                    <span
                        className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
                        aria-hidden="true"
                    ></span>

                    <Input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        required
                        placeholder="example@gmail.com"
                    />
                </div>
            </div>
            {/* Password Input Field */}
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm text-primary/85 font-medium mb-1.5 select-none"
                >
                    Password
                </label>
                <div className="relative">
                    <span
                        className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
                        aria-hidden="true"
                    ></span>
                    <ButtonToggle
                        className="absolute cursor-pointer text-gray-500 hover:text-gray-700 right-3 top-3 "
                        onToggle={() => setShowPassword(!showPassword)}
                        type="button"
                    >
                        {showPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeOff size={20} />
                        )}
                    </ButtonToggle>
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        placeholder="Enter Your Password"
                    />
                </div>
            </div>
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
                    <a
                        href="/auth/register"
                        className="text-accent hover:underline"
                    >
                        Register here
                    </a>
                </p>
            </div>
            {/* Forgot Password Field */}
            <div className="select-none text-center">
                <a
                    href="/auth/forgot-password"
                    className="text-sm text-accent hover:underline"
                >
                    Forgot your password?
                </a>
            </div>
        </FormUiAuth>
    );
};

export default FormLogin;
