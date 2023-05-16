import './App.css';
import Input from './components/input/Input';
import Tasks from './components/tasks/Tasks';

function App() {
    return (
        <div className="body">
            <div className="container">
                <h1 className="todo-title">Lista de tarefas</h1>
                <Input />
                <Tasks />
            </div>
        </div>
  );
}

export default App;
