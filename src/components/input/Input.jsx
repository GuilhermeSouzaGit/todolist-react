import React, { useState, useRef } from "react";
import "./Input.css";

const Input = ({setTaskList}) => {
  	const [task, setTask] = useState("");

  	const inputRef = useRef(null);

  	function createTask() {
		setTaskList((currentTask) => {
			const newTasks = [...currentTask, task]
			localStorage.setItem("taskList", JSON.stringify(newTasks))
			return newTasks
		})
		setTask("")
		inputRef.current.focus();
  	}

  	function handleChange(e) {
	  	setTask(e.target.value)
  	}

	function handleKeyPress(e) {
        if (e.key === 'Enter') {
            createTask(e);
        }
    }

  	return (
		<div className="input-task">
    		<input placeholder="Adicione uma tarefa" value={task} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyPress} ></input>
      		<button type="submit" onClick={ createTask } className="btn-desktop">Adicionar</button>
			<button type="submit" onClick={ createTask } className="btn-mobile">+</button>
    	</div>
  	);
};

export default Input;
