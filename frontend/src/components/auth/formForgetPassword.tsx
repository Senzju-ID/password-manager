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
          >
            Send Reset Link
          </ButtonToggle>
        </div>
    </FormUiAuth>
  );
};

export default FormForgetPassword;