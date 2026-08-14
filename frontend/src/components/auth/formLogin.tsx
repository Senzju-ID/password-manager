"use client";
import FormUiAuth from "@/components/ui/formUiAuth";

const FormLogin = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <FormUiAuth onSubmit={handleSubmit} PText="Welcome Back! Please login to your account.">
      {/* Username Input Field */}
      <div className="mb-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-secondary mb-1.5 select-none"
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
              "w-full bg-vault text-primary placeholder:text-secondary/40",
              "border rounded-lg py-2.5 pl-3 pr-4 text-sm",
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
          className="block text-sm font-medium text-secondary mb-1.5 select-none"
        >
          Password
        </label>
        <div className="relative">
          <span
            className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
            aria-hidden="true"
          ></span>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Enter Your Password"
            className={[
              "w-full bg-vault text-primary placeholder:text-secondary/40",
              "border rounded-lg py-2.5 pl-3 pr-4 text-sm",
              "outline-none transition-all duration-150",
              "focus:border-accent focus:ring-2 focus:ring-accent/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            ].join(" ")}
          />
        </div>
      </div>
      {/* Submit Button Field */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
        >
          Login
        </button>
      </div>
    </FormUiAuth>
  );
};

export default FormLogin;
