import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    
    const dispatch = useDispatch();

    return (
        <>
        <h2>The Redux Counter</h2>
        <button onClick={() => dispatch(increment())}> + </button>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}> - </button>
        </>
    );
    };

export default Counter;