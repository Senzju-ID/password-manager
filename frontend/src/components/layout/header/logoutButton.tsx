"use client"
import { ButtonToggle } from "@/components";
import { LogoutUser } from "@/lib/auth";

const logoutButton = () => {
  return <ButtonToggle onToggle={LogoutUser}>Logout</ButtonToggle>;
}

export default logoutButton