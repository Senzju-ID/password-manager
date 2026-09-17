"use client";
import { ButtonToggle } from "@/components";
import { LogoutUser } from "@/features/auth/services/auth";

const logoutButton = () => {
    return <ButtonToggle onToggle={LogoutUser}>Logout</ButtonToggle>;
};

export default logoutButton;
