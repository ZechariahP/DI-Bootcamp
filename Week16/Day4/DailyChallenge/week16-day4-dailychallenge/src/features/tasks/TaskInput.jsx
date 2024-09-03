import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "./state/slice.js";

const TaskInput = () => {
    const inputRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        const value = inputRef.current?.value.trim();
        const date = dateRef.current?.value;
        if (value === "") return;
        dispatch(add({ task: value, date }));
        inputRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <>
            <input ref={inputRef} placeholder="Add task..."/>
            <input ref={dateRef} type="datetime-local"/>
            <button onClick={addTask}>Add Task</button>
        </>
    );
}

export default TaskInput;
