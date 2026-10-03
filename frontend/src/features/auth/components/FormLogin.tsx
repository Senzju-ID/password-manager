"use client";
import FormField from "./ui/FormField";
import FormAuth from "./FormAuth";
import { LoginUser, LoginUserProps } from "../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SubmitButton from "./ui/SubmitButton";
import { useState } from "react";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as LoginUserProps;

    try {
      await LoginUser(data);
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormAuth
      onSubmit={handleSubmit}
      title="Welcome Back!"
      description="Please login to your account."
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
      <SubmitButton loading={loading} loadingText="Sending...">
        Login
      </SubmitButton>
      {/* Dont Have Account Field */}
      <div className="mt-4 text-center select-none">
        <p className="text-sm text-primary/85">
          {"Don't have an account?" + " "}
          <Link href="/auth/register" className="text-accent hover:underline">
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
