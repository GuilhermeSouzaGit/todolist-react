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

	function handleItemClick(index) {
		const taskListString = localStorage.getItem("taskList");
		const taskList = JSON.parse(taskListString);
	  
		taskList.splice(index, 1);
	  
		const updatedTaskListString = JSON.stringify(taskList);
		localStorage.setItem("taskList", updatedTaskListString);
		
		setTimeout(() => {
			window.location.reload()
		}, 500)
	}	  

  	return (
		<div className="tasks-container">
			<ul className="tasks">
				{taskList.map((task, index) => (
					<li key={index} className={activated[index] ? "task activated" : "task"}  onClick={ () => {
						toggleClass(index)
						handleItemClick(index)
					}}>
						<button className="btn-task"></button>
						<span>{task}</span>
					</li>
				))}
			</ul>
		</div>
  	)
}

export default Tasks;