import { useState } from 'react';
import List from './GenericList';
import { Todo } from './GenericList';

// Main TodoApp component
function TodoApp() {
  // Initialize the state with an array of to-do items
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a React app' },
  ]);

  // Function to add a new to-do item
  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: `${new Date().toLocaleString()}`,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <List items={todos} renderItem={(todo) => <div>{todo.id} - {todo.text}</div>} />
    </div>
  );
}

export default TodoApp;