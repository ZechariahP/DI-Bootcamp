import { useState, useReducer } from 'react';
import './App.css';

export const initialState = {
  count: 0,
};

export const reducer = (state, action) => {
  console.log(action);
  if(action.type === 'INCREMENT') {
    return {
      ...state, count: state.count + 1,
    };
  }
  else if(action.type === 'DECREMENT') {
    return {
      ...state, count: state.count - 1,
    };
  }
  else if (action.type === 'ADD_NUM') {
    return {
      ...state, count: state.count + action.payload,
    };
  }
  return state;
}

function App() {
  const [count, setCount] = useState(0);
  /** param function- reducer, state- initial state  */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div>
      <h2>useState</h2>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      {count}
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <h2>useReducer</h2>
      <button onClick={() => dispatch({type: 'INCREMENT'})}> + </button>
      {state.count}
      <button onClick={() => dispatch({type: 'DECREMENT'})}> - </button>
      <br />
      <button onClick={() => dispatch({type: 'ADD_NUM', payload: 2})}>ADD 2</button>
    </div>
    {state.text}
    </>
  )
}

export default App;