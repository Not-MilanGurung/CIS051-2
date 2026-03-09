import { useState } from "react"
import CourseForm from "../components/CourseForm"
import CourseInputCard from "../components/CourseInputCard";
import CourseTableCard from "../components/CourseTableRow";

function FormPage() {
	const [courses, setCourses] = useState([]);
  return (
	<main className="h-screen bg-blue-400">
		<CourseForm courses={courses} setCourses={setCourses}/>
		<div className="flex-row  bg-white w-full px-[15%] py-10 gap-10">
			<div className="text-3xl font-bold flex justify-center pb-5">Cards</div>
			<div className="flex flex-wrap gap-10">
				{courses.map(course => <CourseInputCard data={course} />)}
			</div>
		</div>

		<div className="flex-row w-full justify-center px-[15%] bg-white pb-10">
			<div className="text-3xl text-center font-bold pb-5">Table</div>
			<div>
				<table className="border w-full text-center">
					<tr className="border-b">
						<th>Name</th>
						<th className="border-r border-l">Description</th>
						<th>Duration</th>
					</tr>
					{courses.map(course => <CourseTableCard data={course} />)}
				</table>
			</div>
		</div>
	</main>
  )
}

export default FormPage