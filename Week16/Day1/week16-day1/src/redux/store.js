import { createStore, combineReducers } from 'redux';
import counterReducer from './reducer';

const reducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(reducer);

export default store;

