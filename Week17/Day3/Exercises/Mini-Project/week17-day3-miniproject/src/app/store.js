import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/state/slice";

export const appReducer = combineReducers({
    posts: postsReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;