function CourseTableCard({data}) {
    return(
        <tr>
			<td>{data.name}</td>
			<td className="border-r border-l">{data.desc}</td>
			<td>{data.duration}</td>
		</tr>
    )
}

export default CourseTableCard;