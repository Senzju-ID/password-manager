"use client";
import { ButtonToggle, FormUiAuth, Input  } from "@/components";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { RegisterUser, RegisterUserProps } from "@/lib/auth";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as RegisterUserProps;
    
    try {
      await RegisterUser(data);
      alert("registrasi berhasil");
      router.push("/auth/login");
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
    }
  };
  return (
    <FormUiAuth onSubmit={handleSubmit} PText="Create an account to get started.">
    {/* Username Input Field */}
      <div className="mb-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-primary/85 mb-1.5 select-none"
        >
          Username
        </label>
        <div className="relative">
          <span
            className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
            aria-hidden="true"
          ></span>
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            required
            placeholder="Enter Your Username"
          />
        </div>
      </div>
      {/* Email Input Field */}
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary/85 mb-1.5 select-none"
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
              type="email"
              autoComplete="email"
              required
              placeholder="Enter Your Email"
            />
          </div>
        </div>
      {/* Password Input Field */}
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-primary/85 mb-1.5 select-none"
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
      {/* Confirm Password Input Field */}
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-primary/85 mb-1.5 select-none"
          >
            Confirm Password
          </label>
          <div className="relative">
            <span
              className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
              aria-hidden="true"
            ></span>
            <ButtonToggle
              className="absolute cursor-pointer text-gray-500 hover:text-gray-700 right-3 top-3 "
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
              type="button"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </ButtonToggle>
            <Input
              id="confirmPassword"
              name="password_confirmation"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="Confirm Your Password"
            />
          </div>
        </div>
        {/* Submit Button Field */}
        <div className="mt-4">
          <ButtonToggle
            type="submit"
            className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
          >
            Register
          </ButtonToggle>
        </div>
        {/* Already Have Account Field */}
        <div className="mt-4 text-center select-none">
          <p className="text-sm text-primary/85">
            Already have an account?{" "}
            <a href="/auth/login" className="text-accent hover:underline">
              Login here
            </a>
          </p>
        </div>
      </FormUiAuth>
    );
};

export default FormRegister;
