import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/state/tasksSlice';
import categoriesReducer from '../features/tasks/state/categoriesSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
    },
});

