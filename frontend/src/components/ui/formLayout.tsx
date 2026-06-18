"use client";

interface AuthFromProps {
    children?: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormLayout = ({ children, onSubmit }: AuthFromProps) => {
    return (
        <div className="min-h-screen bg-vault flex items-center justify-center p-4 relative overflow-hidden">
            <div className="w-full max-w-sm z-10">
                {/* Tag form sekarang membungkus kartu utama */}
                <form
                    className="bg-surface rounded-xl border border-white/[0.06] p-6 shadow-2xl"
                    onSubmit={onSubmit}
                    noValidate
                >
                    {children}
                </form>
            </div>
        </div>
    );
};

export default FormLayout;
