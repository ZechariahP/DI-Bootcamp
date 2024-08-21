import {useContext} from 'react';
import {AppContext} from '../App';

const ShowCount = () => {
    const {count} = useContext(AppContext);
    return (
        <>
        <h2>Count: {count}</h2>
        </>
    );
};

export default ShowCount;