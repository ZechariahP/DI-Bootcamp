import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/state/slice.js";

const reducer = combineReducers({ tasksReducer });

const store = configureStore({
    reducer: reducer,
});

export default store;