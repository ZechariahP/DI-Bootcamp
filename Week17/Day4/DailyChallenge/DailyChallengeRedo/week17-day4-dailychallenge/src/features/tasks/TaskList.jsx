import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../state/selectors';
import { addTask, editTask, deleteTask, completeTask } from '../state/tasksSlice';

const TaskList = ({ categoryId }) => {
    const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));
    const dispatch = useDispatch();
    const [newTaskName, setNewTaskName] = useState('');

    const handleAddTask = useCallback(() => {
        dispatch(addTask({ id: Math.random(), title: newTaskName, category: categoryId }));
        setNewTaskName('');
    }, [dispatch, categoryId, newTaskName]);

    const handleEditTask = useCallback((id, title, category) => {
        dispatch(editTask({ id, title, category }));
    }, [dispatch]);

    const handleDeleteTask = useCallback((id) => {
        dispatch(deleteTask(id));
    }, [dispatch]);

    const handleCompleteTask = useCallback((id) => {
        dispatch(completeTask(id));
    }, [dispatch]);

    const [editingTaskId, setEditingTaskId] = useState(null);

    const handleEditButtonClick = useCallback((id) => {
        setEditingTaskId(id);
    }, []);

    const handleTaskNameChange = useCallback((e, id) => {
        const updatedTaskName = e.target.value;
        dispatch(editTask({ id, title: updatedTaskName }));
    }, [dispatch]);

    const handleTaskNameKeyPress = useCallback((e, id) => {
        if (e.key === 'Enter') {
            setEditingTaskId(null);
        }
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter task name"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {editingTaskId === task.id ? (
                            <input
                                type="text"
                                value={task.title}
                                onChange={(e) => handleTaskNameChange(e, task.id)}
                                onKeyPress={(e) => handleTaskNameKeyPress(e, task.id)}
                            />
                        ) : (
                            <>
                                <label>completed</label><input
                                    type="checkbox"
                                    checked={task.completed || false}
                                    onChange={() => handleCompleteTask(task.id)}
                                />
                                <span>{task.title}</span>
                                <button onClick={() => handleEditButtonClick(task.id)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
