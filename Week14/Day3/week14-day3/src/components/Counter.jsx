import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("Crashed...!!!");
  }

  return (
    <>
      <h2>Count = {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
    </>
  );
};
export default Counter;