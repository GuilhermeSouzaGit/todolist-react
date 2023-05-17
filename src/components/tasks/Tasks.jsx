import React, { useState } from 'react'
import "./Tasks.css"

const Tasks = ({taskList}) => {
	const [ activated, setActivated] = useState({});

	function toggleClass(index) {
		setActivated({
			...activated,
			[index]: !activated[index]
		});
	};

  	return (
		<div className="tasks-container">
			<ul className="tasks">
				{taskList.map((task, index) => (
					<li key={index} className={activated[index] ? "task activated" : "task"}  onClick={ () => toggleClass(index) } >
						<button className="btn-task"></button>
						<span>{task}</span>
					</li>
				))}
			</ul>
		</div>
  	)
}

export default Tasks;