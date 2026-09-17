"use client";
import { ThemeSwitch } from "@/components";

interface AuthFormProps {
    children?: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    PText: string;
}

const FormUiAuth = ({ children, onSubmit, PText }: AuthFormProps) => {
    return (
        <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
            <ThemeSwitch className="absolute top-4 right-4" sizeIcon={20} />
            <div className="w-full max-w-sm z-10">
                <p>{PText}</p>
                <form
                    className="bg-surface rounded-xl border border-white/6 light:border-black/15 p-6 pb-5"
                    method="POST"
                    onSubmit={onSubmit}
                    noValidate
                >
                    {children}
                </form>
            </div>
        </main>
    );
};

export default FormUiAuth;
