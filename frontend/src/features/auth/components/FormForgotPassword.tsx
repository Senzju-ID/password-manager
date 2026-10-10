"use client";
import { useState } from "react";
import axios from "axios";
import FormAuth from "./FormAuth";
import FormField from "./ui/FormField";
import SubmitButton from "./ui/SubmitButton";
import { ForgetPassword } from "../services/auth";
import Link from "next/link";

const FormForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as {
      email: string;
    };

    try {
      await ForgetPassword(data);
      setSent(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
        setError(
          err.response?.data?.errors?.email?.[0] ||
            err.response?.data?.message ||
            "Unable to send reset link.",
        );
      } else {
        setError("Unable to send reset link.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <FormAuth
        onSubmit={(e) => e.preventDefault()}
        title="Check your email"
        description="We've sent you a password reset link."
        showBack={false}
        showborder={false}
        className="text-center"
      >
        <Link
          href="/auth/login"
          className="text-sm text-accent hover:underline text-center"
        >
          Back to login
        </Link>
      </FormAuth>
    );
  }

  return (
    <FormAuth
      onSubmit={handleSubmit}
      showBack={false}
      title="Forgot your password??"
      description="Enter your email to reset your password"
    >
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
        required
      />

      <SubmitButton loading={loading} loadingText="Sending...">
        Send Reset Link
      </SubmitButton>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      <div className="select-none text-center mt-2">
        <Link
          href="/auth/login"
          className="text-sm text-accent hover:underline text-center"
        >
          Back to login
        </Link>
      </div>
    </FormAuth>
  );
};

export default FormForgotPassword;
