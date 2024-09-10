import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, ...task } = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
                Object.assign(existingTask, task);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTaskProgress: (state, action) => {
            const { id, progress } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.progress = progress;
            }
        },
    },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;




