"use client";
import { ButtonToggle, Input } from "@/components";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: "text" | "email" | "password";
    placeholder: string;
    required?: boolean;
    autoComplete?: string;
}

const FormField = ({
    id,
    name,
    label,
    type,
    placeholder,
    required,
    autoComplete
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    return (
        <div className="mb-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-primary/85 mb-1.5 select-none"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
                <Input
                    id={id}
                    name={name}
                    type={inputType}
                    autoComplete={autoComplete}
                    required={required}
                    placeholder={placeholder}
                />
                {isPassword && (
                    <ButtonToggle
                        className="absolute cursor-pointer text-gray-500 hover:text-gray-700 right-3 top-3 "
                        onToggle={() => setShowPassword(!showPassword)}
                        type="button"
                    >
                        {showPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeOff size={20} />
                        )}
                    </ButtonToggle>
                )}
            </div>
        </div>
    );
};

export default FormField;
