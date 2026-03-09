function CourseInputCard({data}) {
    return(
        <div className="flex-row shadow bg-gray-700 text-white rounded-lg w-1/4">
            <div className="p-5">
                <h1 className="text-xl font-semibold">{data.name}</h1>
				<div className="pt-4">{data.desc}</div>
                <div className="pt-4">{data.duration} months</div>
            </div>
        </div>
    )
}

export default CourseInputCard;