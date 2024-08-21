import { useContext } from "react";
import { AppContext } from "../App";

const Name = () => {
    const {name} = useContext(AppContext);
    return(
    <h1>Name: {name}</h1>
    )
    }