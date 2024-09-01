import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const handleAddTodo = () => {
        dispatch(addTodo({
            text: value,
            completed: false,
            id: Date.now()
        }));
        setValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default AddTodo;