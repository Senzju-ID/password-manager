"use client";

import { useUser } from "@/features/auth/components/ui/UserContext";
import Link from "next/link";
import { LogoutUser } from "@/features/auth/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRoundCog, LogOut, Settings } from "lucide-react";
import { ConfirmModal, ButtonToggle } from "@/components";

interface UserMenuProps {
  dashButton?: boolean;
}

const UserMenu = ({ dashButton = false }: UserMenuProps) => {
  const user = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = async () => {
    if (loading) return;

    setLoading(true);

    try {
      await LogoutUser();
      router.replace("/auth/login");
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  if (user && dashButton) {
    return (
      <Link href="/dashboard" className="hover:underline">
        Dash
      </Link>
    );
  }

  if (user) {
    return (
      <div className="relative flex">
        <ButtonToggle
          disabled={loading}
          onClick={() => setOpen(!open)}
          className="disabled:cursor-not-allowed hover:underline"
        >
          <UserRoundCog size={22} />
        </ButtonToggle>
        {open && (
          <div className="absolute right-0 top-full mt-2 z-10 w-28 bg-surface shadow-lg rounded-lg border border-white/22 light:border-black/40">
            <div className="flex flex-col items-center justify-center gap-2 p-2 mt-1">
              <ButtonToggle onClick={() => router.push("/dashboard/settings")} disabled={loading} className="flex flex-row disabled:cursor-not-allowed">
                <Settings size={18} />
                <span className="ml-1 text-sm font-semibold">Settings</span>
              </ButtonToggle>
              <ButtonToggle onClick={() => setShowConfirm(true)} disabled={loading} className="flex flex-row disabled:cursor-not-allowed">
                <LogOut size={18} />
                <span className="ml-1 text-sm font-semibold">Logout</span>
              </ButtonToggle>
            </div>
          </div>
        )}
        <ConfirmModal 
        isOpen={showConfirm}
        title="Confirm Logout"
        description="Are you sure you want to log out?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleLogout}
        />
      </div>
    );
  }

  return (
    <Link href="/auth/login" className="hover:underline">
      Login
    </Link>
  );
};

export default UserMenu;
