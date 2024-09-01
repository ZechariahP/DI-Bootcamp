import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;

/* Step 5: Test Functionality
Add Todos:

Test adding new todos using the AddTodo component.
Ensure new todos are correctly dispatched and added to the Redux store.

Complete Todos:

Test toggling the completion status of todos.
Verify that the completion status is updated in the Redux store.

Remove Todos:

Test removing todos using the TodoItem component.
Confirm that todos are correctly removed from the Redux store.

Overall Functionality:

Test the overall functionality of the Todo List by adding, completing, and removing todos to ensure smooth interaction between React components and the Redux store.
By following these steps, you’ll create a basic Todo List application using React-Redux and Redux Toolkit, ensuring proper state management and interaction between React components and the Redux store.



🌟 Exercise 2: Daily Planner Application Using React-Redux


Instructions
Create a daily planner application allowing users to manage tasks for specific days. The application should allow users to view tasks for different days, add new tasks, edit existing tasks, and delete tasks.

Set up a Redux store to manage tasks for different days.
Create actions and reducers to handle adding, editing, and deleting tasks for each day.
Implement components to display a calendar or date picker to select days and view tasks for the selected day.
Create UI elements for adding new tasks, editing existing tasks, and deleting tasks.
Connect the components to the Redux store for managing tasks.
Ensure the application updates and displays tasks according to the selected day.
 */