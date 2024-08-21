import { useContext } from 'react';
import { AppContext2 } from '../../App2';


const Input = () => {
    const { setText } = useContext(AppContext2);
    return (
        <>
            <input onChange={(e)=> setText(e.target.value) } />
        </>
    );
}

export default Input;