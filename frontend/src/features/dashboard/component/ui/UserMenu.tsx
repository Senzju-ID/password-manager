"use client";

import { useUser } from "@/features/auth/components/ui/UserContext";
import Link from "next/link";
import { LogoutUser } from "@/features/auth/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UserMenu = () => {
    const user = useUser();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        if (loading) return;

        setLoading(true);

        try {
            await LogoutUser();
            router.push("/auth/login");
        } catch (err) {
            setLoading(false);
        }
    };

    if (user) {
        return (
            <button
                disabled={loading}
                onClick={handleLogout}
                className="disabled:cursor-not-allowed hover:underline cursor-pointer"
            >
                {loading ? "Logging out..." : "Logout"}
            </button>
        );
    }

    return (
        <Link href="/auth/login" className="hover:underline">
            Login
        </Link>
    );
};

export default UserMenu;
