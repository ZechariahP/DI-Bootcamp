import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // add task
        add: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                task: action.payload.task,
                date: action.payload.date,
                active: true,
            });
        },
        // remove task
        remove: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        // clear all tasks
        clear: (state) => {
            state.tasks = [];
        },
        active: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.active = !task.active;
            }
        },
        edit: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        },
    },
});

export const { add, remove, clear, active, edit } = tasksSlice.actions;
export default tasksSlice.reducer;
