import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const dispatch = useDispatch();

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleAddTask = () => {
        if (selectedDate) {
            dispatch(addTask(selectedDate, 'New Task'));
        }
    };

    return (
        <div>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};