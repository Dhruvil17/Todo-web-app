import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { getDate } from "./utils/constants";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (index, newTask) => {
        const updatedTask = tasks.map((task, i) =>
            i === index ? newTask : task
        );
        setTasks(updatedTask);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="py-[5%] bg-gray-100 flex items-start justify-center min-h-screen">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-center text-2xl font-bold my-2">
                    To-Do List
                </h1>
                <h2 className="my-[5%] text-lg font-semibold">{getDate()}</h2>
                <AddTask addTask={addTask} />
                <TaskList
                    tasks={tasks}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default App;
