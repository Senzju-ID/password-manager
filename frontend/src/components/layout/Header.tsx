const Header = () => {
	return (
		<header className="bg-surface text-primary p-4 shadow-md w-full">
			<div className="container mx-auto flex justify-between items-center ">
				<p className="text-xl cursor-default select-none font-bold">PassZju</p>
				<div className="flex gap-4 text-sm font-medium pr-4 sm:pr-0">
					<a href="/auth/login" className="hover:underline">
						Login
					</a>
					<a href="/auth/register" className="hover:underline">
						Register
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
