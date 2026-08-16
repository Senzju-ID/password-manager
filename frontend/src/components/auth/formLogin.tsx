"use client";
import FormUiAuth from "@/components/ui/formUiAuth";
import API from "@/lib/axios";
import ButtonToggle from "../ui/buttonToggle";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await API.get("/auth/sanctum/csrf-cookie");
      const res = await API.post("/auth/ping", data);
      console.log("respon :", res.data);
    } catch (err) {
      console.error("Error occurred while logging in:", err);
    }
  };

  return (
    <FormUiAuth
      onSubmit={handleSubmit}
      PText="Welcome Back! Please login to your account."
    >
      {/* Username Input Field */}
      <div className="mb-2">
        <label
          htmlFor="username"
          className="block text-sm text-primary/85 font-medium mb-1.5 select-none"
        >
          Username
        </label>
        <div className="relative">
          <span
            className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
            aria-hidden="true"
          ></span>

          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            required
            placeholder="Enter Your Username"
            className={[
              "w-full bg-vault text-primary placeholder:text-secondary/55",
              "border rounded-lg border-white/80 light:border-black/45 py-2.5 pl-3 pr-4 text-sm",
              "outline-none transition-all duration-150",
              "focus:border-accent focus:ring-2 focus:ring-accent/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            ].join(" ")}
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
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </ButtonToggle>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="Enter Your Password"
            className={[
              "w-full bg-vault text-primary placeholder:text-secondary/55",
              "border rounded-lg border-white/80 light:border-black/45 py-2.5 pl-3 pr-4 text-sm",
              "outline-none transition-all duration-150",
              "focus:border-accent focus:ring-2 focus:ring-accent/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            ].join(" ")}
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
          <a href="/auth/register" className="text-accent hover:underline">
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
