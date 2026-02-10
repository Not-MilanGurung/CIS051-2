import './App.css'
// import userIcon from './assets/user-fill.svg'

function App() {

	return (
		<>
			<header class="flex h-20 items-center px-30 pt-4 shadow">
				<div class="text-xl w-1/4 font-bold">Course Management System</div>
				<nav class="w-2/4 h-full">
					<ul class="flex h-full font-medium">
						<li class="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Dashboard</li>
						<li class="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Courses</li>
						<li class="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">Calender</li>
						<li class="flex items-center px-5 hover:text-blue-600 hover:bg-linear-to-b from-0% to-blue-100 cursor-pointer">About</li>
					</ul>
				</nav>
				<div class="flex justify-end space-x-4 w-1/4">
					<button class="text-white rounded-md bg-gray-600 hover:bg-gray-400 px-4 py-2 cursor-pointer">Login</button>
					<button class="text-white rounded-md bg-blue-600 hover:bg-blue-400 px-4 py-2 cursor-pointer">SignUp</button>
				</div>
			</header>
			<main class="h-screen bg-blue-400">

			</main>
		</>
	)
}

export default App
