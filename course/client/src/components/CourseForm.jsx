import { useState } from "react"

function CourseForm({courses, setCourses}) {
	const [inputs, setInputs] = useState({
		name: "",
		desc: "",
		duration: 0
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs(values => ({...values, [name]: value}));
	}

	const onsbumit = (e) => {
		e.preventDefault();
		const updatedCourses = [...courses, {
			name: inputs.name,
			desc: inputs.desc,
			duration: inputs.duration
		}]

		setCourses(updatedCourses);
		clearInputs();
	}

	const clearInputs = () => {
		setInputs({
			name: "",
			desc: "",
			duration: 0
		});
	}

	return (
		<div className="flex justify-center p-5">
			<form onSubmit={onsbumit} className="flex-row border bg-white p-5 rounded-2xl min-w-120">
				<label className="text-2xl font-bold">Add Course Card</label><br />
				<label>
					Course Name: <br />
					<input 
						type="text"
						name="name"
						value={inputs.name}
						onChange={handleChange}
						className="border w-full" 
						required
					/>
				</label> <br />
				<label>
					Description: <br />
					<textarea name="desc" id="desc"
						value={inputs.desc}
						onChange={handleChange}
						className="border w-full"
						rows={5}
						required
					>
					</textarea>
				</label><br />
				<label>
					Duration (in months): <br />
					<input type="number" 
						name="duration"
						onChange={handleChange}
						value={inputs.duration}
						className="border w-full"
					/>
				</label> <br />
				<input type="submit" className="cursor-pointer my-4 rounded-md p-2 bg-blue-400 text-white hover:bg-blue-700"/>
			</form>
		</div>
	)
}

export default CourseForm