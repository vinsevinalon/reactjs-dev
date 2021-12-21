import { useState } from 'react'

const Tasks = () => {
	return (
		<div>
			{tasks.map((tasks) => (
				<h3>{tasks.text}</h3>
			))}
						
		</div>
	)
}

export default Tasks
