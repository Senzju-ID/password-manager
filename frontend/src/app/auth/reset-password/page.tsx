import FormResetPassword from "@/features/auth/components/FormResetPassword";
import { redirect } from "next/navigation";

type ResetPasswordPageProps = {
  searchParams?: Promise<{
    token?: string;
    email?: string;
  }>;
};

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const params = await searchParams;

  if (!params?.token || !params?.email) {
    redirect("/auth/login");
  }

  return (
    <>
      <FormResetPassword token={params.token} email={params.email} />
    </>
  );
}
