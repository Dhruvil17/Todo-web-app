import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask(task);
        setTask("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex my-5">
                <input
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="flex-grow p-2 border border-gray-300 rounded-l"
                    placeholder="Add a new item"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-700">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTask;
