
function NavBar({title}) {
    return (
        <header className="flex-row space-y-4 lg:space-y-0 lg:flex h-40 lg:h-20 items-center lg:px-[10vw] pt-4 shadow box-content">
				<div className="text-xl text-center lg:w-1/4 font-bold">{title}</div>
				<nav className="lg:w-2/4 h-1/3 lg:h-full">
					<ul className="flex h-full font-medium justify-center">
						<li className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Dashboard</li>
						<li className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Courses</li>
						<li className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Calender</li>
						<li className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">About</li>
					</ul>
				</nav>
				<div className="flex justify-center lg:justify-end space-x-4 lg:w-1/4">
					<button className="text-white rounded-md bg-gray-600 hover:bg-gray-400 px-4 py-2 cursor-pointer">Login</button>
					<button className="text-white rounded-md bg-blue-600 hover:bg-blue-400 px-4 py-2 cursor-pointer">SignUp</button>
				</div>
        </header>
    )
}

export default NavBar;