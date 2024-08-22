import React, { useReducer, useState, useRef } from "react";

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            // Add a new todo to the state
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case "REMOVE_TODO":
            // Remove a todo by its id
            return state.filter((todo) => todo.id !== action.id);
        case "EDIT_TODO":
            // Edit a todo by its id
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, text: action.text };
                }
                return todo;
            });
        case "TOGGLE_COMPLETED":
            // Toggle the completed status of a todo by its id
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        case "FILTER_TASKS":
            // Filter tasks based on completion status
            switch (action.filter) {
                case "all":
                    return state;
                case "completed":
                    return state.filter((todo) => todo.completed);
                case "active":
                    return state.filter((todo) => !todo.completed);
                default:
                    return state;
            }
        default:
            return state;
    }
}

export function TaskManager() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");
    const [filter, setFilter] = useState("all");
    const inputRef = useRef(null);

    const handleAddTodo = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: "ADD_TODO", text: todoText });
        setTodoText("");
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", id });
    };

    const handleEditTodo = (id, newText) => {
        dispatch({ type: "EDIT_TODO", id, text: newText });
    };

    const handleToggleCompleted = (id) => {
        dispatch({ type: "TOGGLE_COMPLETED", id });
    };

    const handleFilterTasks = (filter) => {
        dispatch({ type: "FILTER_TASKS", filter });
        setFilter(filter);
    };

    const handleEditButtonClick = (id) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo) {
            inputRef.current.value = todo.text;
            inputRef.current.focus();
        }
    };

    const handleSaveEdit = (id) => {
        const newText = inputRef.current.value;
        handleEditTodo(id, newText);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <div>
                <button
                    onClick={() => handleFilterTasks("all")}
                    disabled={filter === "all"}
                >
                    Show All
                </button>
                <button
                    onClick={() => handleFilterTasks("completed")}
                    disabled={filter === "completed"}
                >
                    Show Completed
                </button>
                <button
                    onClick={() => handleFilterTasks("active")}
                    disabled={filter === "active"}
                >
                    Show Active
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <input ref={inputRef} />
                            <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                        </div>
                        <div>
                            <span
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                }}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => handleEditButtonClick(todo.id)}>
                                Edit
                            </button>
                            <button onClick={() => handleRemoveTodo(todo.id)}>
                                Remove
                            </button>
                            <button onClick={() => handleToggleCompleted(todo.id)}>
                                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}