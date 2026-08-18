"use client";
import ButtonThemeSwitch from "../ui/ThemeSwitch";

interface AuthFormProps {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  PText: string;
}

const FormUiAuth = ({ children, onSubmit, PText }: AuthFormProps) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
      <ButtonThemeSwitch className="absolute top-4 right-4 border border-white/6 light:border-black/70" />
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
    </div>
  );
};

export default FormUiAuth;
