import {RiStarFill, RiTimeLine} from '@remixicon/react';


function CourseCard({title, desc, image, tutor, rating, ratingcount, hours, cost}) {
  return (
	<div className="bg-gray-900 text-white max-w-100 rounded-xl hover:scale-140 transition duration-100 ease-in">
		<div>
			<img src={image} alt="Image of course" className="w-full h-50 object-cover"/>
		</div>
		<div className="flex-row py-4 px-2 gap-10">
			<div className="text-xl text-purple-500 font-bold">{title}</div>
			<div className='my-2'>{desc}</div>
			<div>By <span className='text-purple-500'>{tutor}</span></div>
			<div className='flex items-center gap-x-2'>
				<RiStarFill color='yellow' size={18}/>
				<div className='font-semibold'>{rating}</div> 
				(
				{ratingcount}
				)
			</div>
			<div className='flex items-center gap-x-2'>
				<RiTimeLine color="white" size={18}/>
				<div>{hours} hours</div>
			</div>
			<div className='flex justify-between items-center'> 
				<div className='text-purple-500 text-xl font-semibold flex'>${cost}</div>
				<div className='bg-purple-700 px-4 py-2 rounded-md'>
					Enroll
				</div>
			</div>
		</div>
	</div>
  )
}

export default CourseCard