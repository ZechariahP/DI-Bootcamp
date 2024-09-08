import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksSlice  from '../features/books/state/slice';
export const appReducer = combineReducers({
    books: booksSlice,
});
const store = configureStore({
    reducer: appReducer,
});
export default store;