import React, { useState } from "react";

const TaskItem = ({ index, task, editTask, deleteTask }) => {
    const [newTask, setNewTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        if (isEditing) {
            editTask(index, newTask);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <div className="flex justify-between items-center space-x-2 p-2 border border-gray-300 rounded">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={handleChange}
                    className="flex-grow p-2 border border-gray-300 rounded"
                />
            ) : (
                <span>{task}</span>
            )}
            <div className="space-x-2">
                <button
                    onClick={handleEdit}
                    className={`px-3 py-1 rounded focus:outline-none ${
                        isEditing
                            ? "bg-green-500 hover:bg-green-700"
                            : "bg-blue-500 hover:bg-blue-700"
                    } text-white`}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
