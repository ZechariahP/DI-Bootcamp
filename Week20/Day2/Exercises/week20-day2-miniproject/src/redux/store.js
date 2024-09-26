import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import weatherReducer from './reducers';

const store = configureStore({
  reducer: weatherReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;