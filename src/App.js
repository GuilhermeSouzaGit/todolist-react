import { useState } from 'react';
import './App.css';
import Input from './components/input/Input';
import Tasks from './components/tasks/Tasks';
import Clear from './components/Clear/Clear';

function App() {

    const [taskList, setTaskList] = useState(() => {
        const storedTasks = localStorage.getItem("taskList")

		if(storedTasks) return JSON.parse(storedTasks)

		return[]
    })

    return (
        <div className="body">
            <div className="container">
                <h1 className="todo-title">Lista de tarefas</h1>
                <Input setTaskList={setTaskList} />
                <Tasks taskList={taskList} />
                <Clear />
            </div>
        </div>
  );
}

export default App;
