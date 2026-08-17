"use client";
import ButtonThemeSwitch from "./buttonThemeSwitch";

interface AuthFromProps {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  PText: string;
}

const FormUiAuth = ({ children, onSubmit, PText }: AuthFromProps) => {
  return (
    <div className="min-h-screen bg-primary text-primary flex items-center justify-center p-4 relative overflow-hidden">
      <ButtonThemeSwitch className="absolute top-4 right-4 border border-white/6 light:border-black/70" />
      <div className="w-full max-w-sm z-10">
        <p>{PText}</p>
        <form
          className="bg-surface rounded-xl border border-white/6 light:border-black/15 pr-6 pl-6 pt-6 pb-5"
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
