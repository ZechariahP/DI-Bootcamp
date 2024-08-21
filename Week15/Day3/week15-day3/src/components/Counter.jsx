import { useContext } from "react";
import { AppContext } from "../App";
import ShowCount from "./ShowCount";
import Name from "./Name";

const Counter = ({ title }) => {
  //   console.log(props);
  //   const { count } = props;

  const {count, setCount, name} = useContext(AppContext)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      <h2>
        <ShowCount />
      </h2>
      <button onClick={() => setCount((count) => count + 1)}> - </button>
    </div>
  );
};
export default Counter;