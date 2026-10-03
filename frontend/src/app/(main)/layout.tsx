import Header from "@/components/layout/Header";
import { UserProvider } from "@/features/auth/components/ui/UserContext";
import { getUserData } from "@/features/auth/services/auth.server";

export default async function MainLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const result = await getUserData();

    return (
        <UserProvider user={result?.user ?? null}>
            <Header dashButton />
            {children}
        </UserProvider>
    );
}
