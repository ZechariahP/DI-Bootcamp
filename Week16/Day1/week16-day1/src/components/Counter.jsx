import {useSelector, useDispatch, connect} from 'react-redux';
import {increment, decrement} from '../redux/actions';


const Counter = (props) => {
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

const mapState = (state) => {
    return {
        count: state.counter.count,
    };
};

const mapDispatch = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
};

export default connect(mapState, mapDispatch)(Counter);
