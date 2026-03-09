import CourseCard from '../components/CourseCard'
import ReactLogo from '../assets/react-logo.jpg'
import JSLogo from '../assets/js-logo.png'

const courses = [
	{
		title: "React",
		desc: "React is a libaray for frontend developed by Meta and currently maintained",
		image: ReactLogo,
		tutor: "John Smitn",
		rating: 4.4,
		ratingCount: 1245,
		hours: 44,
		cost:22,
	},
	{
		title: "Javascript",
		desc: "Javascript is a weakly typed language primarly used by browsers",
		image: JSLogo,
		tutor: "Carl Johnson",
		rating: 4.7,
		ratingCount: 1234,
		hours: 24,
		cost:12
	},
]

function HomePage() {
  return (
	<main>
		<div className='flex-row bg-purple-700 text-white py-10 px-[15%] justify-center'>
			<div className='flex justify-center text-4xl font-bold'>Explore Our Courses</div>
			<div className='flex justify-center px-[25%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat perspiciatis deleniti laboriosam tempore assumenda aspernatur necessitatibus</div>
		</div>
		{/* Card Sections */}
		<div className='flex flex-wrap px-[15%] py-10 bg-black gap-10 justify-evenly'>
			{courses.map(value =>
				<CourseCard title={value.title} desc={value.desc} image={value.image} rating={value.rating} 
						ratingcount={value.ratingCount} tutor={value.tutor} hours={value.hours} cost={value.cost}/>
			)}
		</div>
	</main>
  )
}

export default HomePage