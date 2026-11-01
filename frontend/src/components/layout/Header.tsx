import { ThemeSwitch } from "@/components";
import UserMenu from "@/features/dashboard/components/ui/UserMenu";
import Sidebar from "./Sidebar";

interface HeaderProps {
  dashButton?: boolean;
}

const Header = ({ dashButton = false }: HeaderProps) => {
  return (
    <header className="bg-surface text-primary p-4 shadow-md w-full h-16">
        
        <div className="flex items-center h-full">
          <Sidebar sizeIcon={24} />
          <p className="text-xl cursor-default select-none font-bold mt-1">
            Passzju
          </p>
          <div className="flex gap-4 text-sm items-center font-medium pr-2 sm:pr-0 ml-auto">
            <ThemeSwitch sizeIcon={24} border={false} />
            <UserMenu dashButton={dashButton} />
          </div>
        </div>
    </header>
  );
};

export default Header;
