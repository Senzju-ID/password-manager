"use client";

import { useUser } from "@/features/auth/components/ui/UserContext";
import { LogoutUser } from "@/features/auth/services/auth";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  UserCircle,
  UserRound,
  LogOut,
  Settings,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
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

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
      setShowConfirm(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleEscape);
  };
}, []);

  const handleNavigate = (path: string) => {
  setOpen(false);
  router.push(path);
};

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
      <ButtonToggle
        onClick={() => router.push("/dashboard")}
        className="flex items-center gap-1.5
          rounded-xl border border-ui-border
          bg-ui px-3 py-2
          text-primary
          transition-colors duration-150
          light:hover:brightness-95
          hover:brightness-110
          disabled:cursor-not-allowed
          disabled:opacity-50"
      >
        Dash
      </ButtonToggle>
    );
  }

  if (user) {
    return (
      <div className="relative select-none" ref={menuRef}>
        <ButtonToggle
          disabled={loading}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1.5
            rounded-xl border border-ui-border
          bg-ui px-3 py-2
          text-primary
            transition-colors duration-150
            light:hover:brightness-95
            hover:brightness-110
            disabled:cursor-not-allowed
            disabled:opacity-50"
        >
          <UserCircle size={18} />
          <span className="text-sm font-semibold">Profil</span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </ButtonToggle>
        {open && (
          <div className="absolute right-0 top-full mt-1 z-10 w-56
  rounded-xl border border-ui-border
  bg-surface p-1 shadow-lg">
            <div className="flex flex-col justify-center gap-2 p-2 px-4 mt-1 ">
              <div className="flex flex-row items-center gap-3 mb-2 mt-2">
                <div className="flex bg-gray-800 rounded-full p-2 light:bg-gray-200 justify-center items-center">
                  <UserRound size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-base font-semibold text-primary">
                    {user.username}
                  </p>
                  <p className="text-xs text-secondary">{user.email}</p>
                </div>
              </div>
              <span className="block border-b border-ui-border" />
              <ButtonToggle
                onClick={() => handleNavigate("/dashboard/settings/profile")}
                className="w-full flex flex-row items-center hover:text-gray-300 light:hover:text-gray-700 gap-1"
              >
                <UserRound size={16} />
                <span className="ml-1 text-sm font-semibold">My Profile</span>
              </ButtonToggle>
              <ButtonToggle
                onClick={() => handleNavigate("/dashboard/settings")}
                className="w-full flex flex-row items-center hover:text-gray-300 light:hover:text-gray-700 gap-1"
              >
                <Settings size={16} />
                <span className="ml-1 text-sm font-semibold">Settings</span>
              </ButtonToggle>
              <span className="block border-b border-ui-border" />
              <ButtonToggle
                onClick={() => setShowConfirm(true)}
                className="w-full flex flex-row  text-red-600 hover:text-red-700 light:hover:text-red-500 items-center gap-1 mb-1"
              >
                <LogOut size={16} />
                <span className="ml-1 text-sm font-semibold">Logout</span>
              </ButtonToggle>
            </div>
          </div>
        )}
        <ConfirmModal
          isOpen={showConfirm}
          title="Confirm Logout"
          description="Are you sure you want to logout?"
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleLogout}
        />
      </div>
    );
  }

  return (
    <ButtonToggle
      onClick={() => router.push("/auth/login")}
      className="flex items-center gap-1.5
        rounded-xl border border-ui-border
        bg-ui px-3 py-2
        text-primary
        transition-colors duration-150
        light:hover:brightness-95
        hover:brightness-110
        disabled:cursor-not-allowed
        disabled:opacity-50"
    >
      Login
    </ButtonToggle>
  );
};

export default UserMenu;
