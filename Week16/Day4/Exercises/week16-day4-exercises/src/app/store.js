import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as todoReducer } from '../features/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;