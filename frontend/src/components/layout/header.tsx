const Header = () => {
	return (
		<header className="bg-surface p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">Password Manager</h1>
				<span className="text-sm bg-green-500 px-3 py-1 rounded-full text-slate-900 font-semibold">
					Vault
				</span>
			</div>
		</header>
	);
};

export default Header;
