import { getUserData } from "@/features/auth/services/auth.server";
import { ThemeSwitch } from "@/components";
import LogoutButton from "./logoutButton";
import Link from "next/link";

const Header = async () => {
    const user = await getUserData();

    return (
        <header className="bg-surface text-primary p-4 shadow-md w-full">
            <div className="flex justify-between items-center ">
                <p className="text-xl cursor-default select-none font-bold">
                    PassZju
                </p>
                <div className="flex gap-4 text-sm items-center font-medium pr-4 sm:pr-0">
                    <ThemeSwitch sizeIcon={18} />
                    {user ? (
                        <LogoutButton />
                    ) : (
                        <Link href="/auth/login" className="hover:underline">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
