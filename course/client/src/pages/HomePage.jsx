import CourseCard from "../components/CourseCard";

import tailwindImage from "../assets/tailwindcss.png";
import typescripImage from "../assets/TypeScript_guide.webp";
import reactLogo from "../assets/react-logo.jpg";

function HomePage() {
    const courses = [
		{name: "Tailwind", duration: 2, image: tailwindImage},
		{name: "Typescript", duration: 1, image: typescripImage},
		{name: "React", duration: 3, image: reactLogo},
	];
    return (
        <main className="h-screen bg-blue-400">
				<div className="flex-row lg:flex justify-items-center lg:justify-center space-y-10 lg:space-y-0 lg:space-x-10 py-10">
					{courses.map( course =>
						<CourseCard name={course.name} duration={course.duration} image={course.image}/>
					)}
				</div>
        </main>
    )
}

export default HomePage;