function CourseCard({name, duration, image}) {
    return(
        <div className="flex-row max-w-[300px] shadow bg-white rounded-lg">
            <div>
                <img src={image} className="w-[300px] h-[150px] bg-cover" alt="" />
            </div>
            <div className="p-5">
                <h1 className="text-xl font-semibold">{name}</h1>
                <div className="pt-4">{duration} months</div>
            </div>
        </div>
    )
}

export default CourseCard;