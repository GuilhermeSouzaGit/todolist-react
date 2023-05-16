import React, { useState, useEffect } from 'react'
import "./Tasks.css"

const Tasks = () => {
	const [ tasks, setTasks ] = useState([]);
	const [ activated, setActivated] = useState({});

	function toggleClass(index) {
		setActivated({
			...activated,
			[index]: !activated[index]
		});
	};

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem("taskList"));
		setTasks(tasks);
	}, [tasks]);
	

  	return (
		<div className="tasks-container">
			<ul className="tasks">
				{tasks.map((task, index) => (
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
