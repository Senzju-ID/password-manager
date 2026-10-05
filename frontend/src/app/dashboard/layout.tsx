import Header from "@/components/layout/Header";
import { UserProvider } from "@/features/auth/components/ui/UserContext";
import { getUserData } from "@/features/auth/services/auth.server";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result = await getUserData();

  if (!result) {
    redirect("/auth/login");
  }

  return (
    <UserProvider user={result.user}>
      <Header />
      {children}
    </UserProvider>
  );
}
