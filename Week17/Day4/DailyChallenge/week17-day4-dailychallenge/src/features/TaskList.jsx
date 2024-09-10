import { addTask, editTask, deleteTask, updateTaskProgress } from './tasks/state/tasksSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks && tasks.map(task => (
        <TaskComponent {...task} /> // Updated the component name
      ))}
    </div>
  );
}

function Task(task) {
  const dispatch = useDispatch();

  return (
    <div>
      <span><input type="checkbox" checked={task.completed} /><input type="text" value={task.title} /></span>
      <span>{task.title}</span>
      <button onClick={() => dispatch(addTask())}>Add Task</button>
      <button onClick={() => dispatch(editTask())}>Edit Task</button>
      <button onClick={() => dispatch(deleteTask())}>Delete Task</button>
      <button onClick={() => dispatch(updateTaskProgress())}>Update Task Progress</button>
    </div>
  );
}

export default TaskList;
