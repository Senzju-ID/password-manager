"use client";
import { useState, useCallback } from "react";
import FormLayout from "@/components/ui/formLayout";

interface FormLoginProps {
    children?: React.ReactNode;
}

const FormLogin = ({ children }: FormLoginProps) => {
    const [form, setForm] = useState<FormState>({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<ApiErrors>({});

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setForm(prev => ({ ...prev, [name]: value }));
            setErrors(prev => ({
                ...prev,
                [name as keyof ApiErrors]: undefined,
                general: undefined
            }));
        },
        []
    );

    return (
        <FormLayout>
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-secondary mb-1.5"
                >
                    Username
                </label>
                <div className="relative">
                    <span
                        className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
                        aria-hidden="true"
                    >
                      
                    </span>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        required
                        disabled={isLoading}
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Masukkan username Anda"
                        aria-invalid={!!errors.username}
                        aria-describedby={
                            errors.username ? "username-error" : undefined
                        }
                        className={[
                            "w-full bg-vault text-primary placeholder:text-secondary/40",
                            "border rounded-lg py-2.5 pl-10 pr-4 text-sm",
                            "outline-none transition-all duration-150",
                            "focus:border-accent focus:ring-2 focus:ring-accent/20",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            errors.username
                                ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                                : "border-white/10 hover:border-white/20"
                        ].join(" ")}
                    />
                </div>
                {errors.username && (
                    <p
                        id="username-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-400"
                    >
                        {errors.username[0]}
                    </p>
                )}
            </div>
        </FormLayout>
    );
};

export default FormLogin;
