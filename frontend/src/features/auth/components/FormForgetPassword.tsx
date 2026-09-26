"use client";
import { ButtonToggle } from "@/components";
import FormField from "./ui/FormField";
import FormAuth from "./FormAuth";
import Link from "next/link";

const FormForgetPassword = () => {
    return (
        <FormAuth>
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
            {/* Submit Button Field */}
            <div className="mt-4">
                <ButtonToggle
                    type="submit"
                    className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
                >
                    Send Reset Link
                </ButtonToggle>
            </div>

            <div className="mt-4 text-center">
                <Link
                    href="/auth/login"
                    className="text-sm text-accent hover:underline"
                >
                    Back to Login
                </Link>
            </div>
        </FormAuth>
    );
};

export default FormForgetPassword;
