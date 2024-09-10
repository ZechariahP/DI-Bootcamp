import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksSlice from '../features/state/tasksSlice.js';
import categoriesSlice from '../features/state/categoriesSlice.js';

export const appReducer = combineReducers({
    tasks: tasksSlice,
    categories: categoriesSlice,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;