import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions';

export const DeleteTask = ({ tasks }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = (index) => {
        dispatch(deleteTask(index));
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteTask;