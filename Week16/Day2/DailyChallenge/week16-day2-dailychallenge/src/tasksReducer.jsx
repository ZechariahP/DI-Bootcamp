import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: {},
    };

export const tasksReducer = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            if (!state.tasks[day]) {
                state.tasks[day] = [];
            }
            state.tasks[day].push(task);
        },
        editTask: (state, action) => {
            const { day, index, task } = action.payload;
            state.tasks[day][index] = task;
        },
        deleteTask: (state, action) => {
            const { day, index } = action.payload;
            state.tasks[day].splice(index, 1);
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksReducer.actions;

export default tasksReducer.reducer;

