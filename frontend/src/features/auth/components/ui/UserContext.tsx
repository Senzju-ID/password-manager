"use client";

import { createContext, useContext } from "react";

interface User {
    id: number;
    username: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

const UserContext = createContext<User | null>(null);

export function UserProvider({
    user,
    children
}: {
    user: User | null;
    children: React.ReactNode;
}) {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
