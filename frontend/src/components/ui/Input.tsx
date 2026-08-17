import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={[
          "w-full bg-vault text-primary placeholder:text-secondary/40",
          "border rounded-lg border-white/80 light:border-black/45 py-2.5 pl-3 pr-4 text-sm",
          "outline-none transition-all duration-150", 
          "focus:border-accent focus:ring-2 focus:ring-accent/20",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; 

export default Input;