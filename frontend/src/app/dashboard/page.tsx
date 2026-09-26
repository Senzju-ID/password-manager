import { getUserData } from "@/features/auth/services/auth.server";

export default async function DashPage() {
    const user = await getUserData();
    return <div>{JSON.stringify(user)}</div>;
}
