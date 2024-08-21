import { useContext } from 'react';
import { AppContext2 } from '../../App2';
const ShowInput = () => {
const {text} = useContext(AppContext2);
return <>
<h2>{text}</h2>
</>
}

export default ShowInput;