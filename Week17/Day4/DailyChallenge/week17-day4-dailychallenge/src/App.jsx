import React from 'react';
import './App.css';
import TaskList from './features/TaskList.jsx';
import CategorySelector from './features/CategorySelector.jsx';


const App = () => {

  return (
    <div className="App">
      <h1>Productivity Tracker</h1>
      <TaskList />
      <CategorySelector />
    </div>
  );
}





export default App;