"use client";

import { ButtonToggle, FormUiAuth, Input } from "@/components";

const FormForgetPassword = () => {
  return (
    <FormUiAuth onSubmit={(e) => e.preventDefault()} PText="Enter Your Email and we will send you a link to reset your password.">
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
        {/* Submit Button Field */}
        <div className="mt-4">
          <ButtonToggle
            type="submit"
            className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
          >
            Send Reset Link
          </ButtonToggle>
        </div>
    </FormUiAuth>
  );
};

export default FormForgetPassword;