import { Link } from "react-router";

function NavBar({title}) {
    return (
        <header className="flex-row space-y-4 lg:space-y-0 lg:flex h-40 lg:h-20 items-center lg:px-[10vw] pt-4 shadow box-content">
				<div className="text-xl text-center lg:w-1/4 font-bold">{title}</div>
				<nav className="lg:w-2/4 h-1/3 lg:h-full">
					<ul className="flex h-full font-medium justify-center">
						<Link to="/" className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Dashboard</Link>
						<Link to="/about" className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">About</Link>
						<Link to="/contact" className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Contact</Link>
						<Link to="/form" className="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Form</Link>
					</ul>
				</nav>
				<div className="flex justify-center lg:justify-end space-x-4 lg:w-1/4">
					<Link to="/login" className="text-white rounded-md bg-gray-600 hover:bg-gray-400 px-4 py-2 cursor-pointer">Login</Link>
					<Link to="/signup" className="text-white rounded-md bg-blue-600 hover:bg-blue-400 px-4 py-2 cursor-pointer">SignUp</Link>
				</div>
        </header>
    )
}

export default NavBar;