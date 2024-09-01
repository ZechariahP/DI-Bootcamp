import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../actions';

export const EditTask = ({ tasks = [] }) => {
    const [editedTask, setEditedTask] = useState('');
    const dispatch = useDispatch();

    const handleEditTask = (index) => {
        if (editedTask) {
            dispatch(editTask(index, editedTask));
        }
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((_, index) => (
                    <li key={index}>
                        <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                        <button onClick={() => handleEditTask(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};