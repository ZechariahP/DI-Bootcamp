
/* Redux Store Configuration
1. Store Setup:

Initialize a Redux store with the necessary structure to manage tasks for different days.
Consider using an object structure where each day holds an array of tasks or any suitable structure to organize tasks by day. */

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});













