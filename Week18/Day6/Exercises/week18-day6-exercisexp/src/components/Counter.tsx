/**
 * 🌟 Exercise 3: Using UseState Hook With TypeScript In React
What You Will Learn:

How to use the useState hook in a React component.
How to manage state in a functional React component using TypeScript.
How to create and handle functions for updating state.
Instructions
Create a functional React component that uses the useState hook to manage a counter. The component should display the current count and have buttons to increment and decrement the count.

 */

import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;