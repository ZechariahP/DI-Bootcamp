import React, { useState, useReducer } from 'react';
import './App.css';

const initialState = {
    todos: [],
};

const reducer = (state, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, { task: action.payload, completed: false }],
        };
    } else if (action.type === 'DELETE_TODO') {
        return {
            ...state,
            todos: state.todos.filter((todo, index) => index !== action.payload),
        };
    } else if (action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
        };
    }
    return state;
};

function App() {
    const [todo, setTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTodo = () => {
        if (todo.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: todo });
            setTodo('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <>
            <div>
                <h1>Todo's</h1>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleAddTodo}>Add</button>
                <ul>
                    {state.todos.map((todo, index) => (
                        <li
                            key={index}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}
                        >
                            {todo.task}
                            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: index })}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;