import React, { useState, useRef, useEffect } from "react";
import "./Input.css";

const Input = () => {
  	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([])
  	const inputRef = useRef(null);

	useEffect(() => {
		localStorage.setItem("taskList", JSON.stringify(taskList))
	}, [taskList])

  	function createTask(e) {
		if (!task) return;
		setTaskList([...taskList, task]);
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
      		<button type="submit" onClick={ createTask }>Adicionar</button>
    	</div>
  	);
};

export default Input;
