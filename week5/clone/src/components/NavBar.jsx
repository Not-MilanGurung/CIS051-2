import { RiSearchLine, RiFlashlightLine, RiUser2Fill } from '@remixicon/react';

function NavBar() {
  return (
	<header className="flex bg-black text-white px-[15%] items-center h-15">
		<div className="w-1/5 text-2xl font-bold">Courses</div>
		<nav className="flex w-3/5 list-none space-x-4 justify-center h-full">
			<li className='hover:text-purple-600 cursor-pointer hover:bg-linear-to-t from-purple-500 px-4 to-40% h-full flex items-center'>Home</li>
			<li className='hover:text-purple-600 cursor-pointer hover:bg-linear-to-t from-purple-500 px-4 to-40% h-full flex items-center'>Courses</li>
			<li className='hover:text-purple-600 cursor-pointer hover:bg-linear-to-t from-purple-500 px-4 to-40% h-full flex items-center'>About</li>
			<li className='hover:text-purple-600 cursor-pointer hover:bg-linear-to-t from-purple-500 px-4 to-40% h-full flex items-center'>Contact</li>
		</nav>
		<div className='flex w-1/5 justify-end space-x-4 items-center'>
			<RiSearchLine color='white' />
			<RiFlashlightLine color='white'/>
			<div className='flex bg-purple-600 items-center px-2 py-1 rounded-md hover:bg-purple-600/80'>
				<RiUser2Fill color='white' />
				<div>Login</div>
			</div>
		</div>
	</header>
  )
}

export default NavBar