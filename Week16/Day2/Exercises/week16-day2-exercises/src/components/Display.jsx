import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';

const Display = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Display;