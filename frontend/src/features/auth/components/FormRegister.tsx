"use client";
import SubmitButton from "./ui/SubmitButton";
import { useState } from "react";
import FormAuth from "./FormAuth";
import FormField from "./ui/FormField";

import { RegisterUser, RegisterUserProps } from "../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as RegisterUserProps;

    try {
      await RegisterUser(data);
      alert("registrasi berhasil");
      router.push("/dashboard");
    } catch (err) {
      if (
        err instanceof Error &&
        (err.message.includes("302") ||
          err.message.includes("400") ||
          err.message.includes("409"))
      ) {
        alert("registrasi gagal, pastikan username dan email belum digunakan");
      } else {
        console.error("Error occurred while registering:", err);
        alert("registrasi gagal, terjadi kesalahan pada server");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormAuth onSubmit={handleSubmit} title="Create Your Account" description="Please fill out to complete your register">
      {/* Username Input Field */}
      <FormField
        id="username"
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        required
      />
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
        autoComplete="new-password"
        required
      />
      {/* Confirm Password Input Field */}
      <FormField
        id="password_confirmation"
        name="password_confirmation"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        autoComplete="new-password"
        required
      />
      {/* Submit Button Field */}
      <SubmitButton loading={loading} loadingText="Creating...">
        Create Account
      </SubmitButton>
      {/* Already Have Account Field */}
      <div className="mt-4 text-center select-none">
        <p className="text-sm text-primary/85">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-accent hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </FormAuth>
  );
};

export default FormRegister;
