import React from 'react';
import { useState } from 'react';


export const TaskDisplay = ({ tasks, addTask, editTask, deleteTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask) {
            addTask(newTask);
            setNewTask('');
        }
    };

    const handleEditTask = (index, newTask) => {
        editTask(index, newTask);
    };

    const handleDeleteTask = (index) => {
        deleteTask(index);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleEditTask(index, 'Edited Task')}>Edit</button>
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};


