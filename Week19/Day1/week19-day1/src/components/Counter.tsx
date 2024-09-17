import React from 'react';

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({count, setCount}: CounterProps) => {
    return (
        <>
            <h2>Counter</h2>
            {count}
            <button onClick={() => setCount((prev: number) => prev + 1)}> + </button>
        </>
    );
}

export default Counter;