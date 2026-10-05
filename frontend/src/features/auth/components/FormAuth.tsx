"use client";
import { ButtonToggle, ThemeSwitch } from "@/components";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  description: string;
  showBack?: boolean;
  showborder?: boolean;
  className?: string;
}

const FormAuth = ({
  children,
  onSubmit,
  title,
  description,
  showBack = true,
  showborder = true,
  className = "",
}: AuthFormProps) => {
  const router = useRouter();
  return (
    <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
      {showBack && (
        <ButtonToggle
          onClick={() => router.back()}
          className="absolute top-6 left-6"
        >
          {"<--Back"}
        </ButtonToggle>
      )}
      <ThemeSwitch className="absolute top-4 right-4" sizeIcon={20} />
      <div className="w-full max-w-sm z-10">
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1.5 text-base text-secondary">{description}</p>
        </div>
        <form
          className={` ${showborder ? " bg-surface border border-white/6 light:border-black/15 rounded-xl p-6 pb-5" : ""} ${className} `}
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

export default FormAuth;
