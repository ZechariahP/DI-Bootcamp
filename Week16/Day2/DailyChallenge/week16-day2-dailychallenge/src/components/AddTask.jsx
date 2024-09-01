import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

export const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task) {
            dispatch(addTask('New Task'));
        }
    };

    return (
        <div>
            <input type="text" value={task} onChange={handleTaskChange} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};