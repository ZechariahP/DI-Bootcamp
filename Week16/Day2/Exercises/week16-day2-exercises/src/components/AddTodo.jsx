import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState('');

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: Date.now(),
            text: input,
            completed: false,
        }));
        setInput('');
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;