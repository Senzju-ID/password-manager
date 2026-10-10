import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={[
                    "w-full bg-primary text-primary placeholder:text-secondary/80",
                    "h-11 border rounded-lg border-white/10 light:border-black/15 px-3 pr-10 py-0 text-sm leading-normal",
                    "outline-none transition-all duration-150",
                    "focus:border-accent focus:ring-2 focus:ring-accent/20",
                    "disabled:opacity-50",
                    className
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
