import { ButtonToggle, ThemeSwitch } from "@/components";
import { LogoutUser } from "@/lib/auth";



const Header = async () => {
	

	return (
		<header className="bg-surface text-primary p-4 shadow-md w-full">
			<div className="flex justify-between items-center ">
				<p className="text-xl cursor-default select-none font-bold">PassZju</p>
				<div className="flex gap-4 text-sm items-center font-medium pr-4 sm:pr-0">
					<ThemeSwitch sizeIcon={18} />
					{user ?<a href="/auth/login" className="hover:underline">
						Login
					</a> 
					:
					<ButtonToggle onToggle={()=> await LogoutUser()}>

					</ButtonToggle>
					}
				</div>
			</div>
		</header>
	);
};

export default Header;
