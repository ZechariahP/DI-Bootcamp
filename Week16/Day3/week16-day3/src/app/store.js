import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { incrementByNum } from '../features/counter/counterSlice';
import logger from 'redux-logger';

/* const loggerA = (store) => (next) => (action) => {
    console.log('prev state:', store.getState());
    console.log('action:', action);
    next(action);
    console.log('next state:', store.getState());
} */

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
   /*  middleware: (getDefaultMiddleware) => {
        console.log(getDefaultMiddleware());
        return getDefaultMiddleware().concat(logger, loggerA);
    },*/
});

/* const delayIncrement = (dispatch, getState) => {
    setTimeout(() => {
        dispatch(incrementByNum(5));
    }, 5000);
}*/
export default store;

