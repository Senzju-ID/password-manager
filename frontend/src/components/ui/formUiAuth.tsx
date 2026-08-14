"use client";
interface AuthFromProps {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  PText: string;
}

const FormUiAuth = ({ children, onSubmit, PText }: AuthFromProps) => {
  return (
    <div className="min-h-screen bg-vault flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-sm z-10">
        <p>{PText}</p>
        <form
          className="bg-surface rounded-xl border border-white/6 p-6"
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
