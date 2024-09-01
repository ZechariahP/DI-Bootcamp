/* Step 4: Connect Components To Redux Store
Use useSelector and useDispatch:
Within each React component, use useSelector to access state from the Redux store.
Dispatch actions using useDispatch to interact with the store. */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    useSelector(state => state.todos);

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <div>
            <span
                onClick={handleToggle}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
            <button onClick={handleRemove}>Remove</button>
            </span>
        </div>
    );
};

export default TodoItem;