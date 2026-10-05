"use client";
import { useUser } from "@/features/auth/components/ui/UserContext";

export default function DashPage() {
    const user = useUser();
    return <div>{JSON.stringify(user)}</div>;
}
