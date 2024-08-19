import React, { useState } from 'react';


const Phone = () => {
    const [myPhone, setMyPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S21",
        color: "Phantom Black",
        year: 2021
    });

    const changeColor = () => {
        const newPhone = { ...myPhone, color: "Phantom Violet" };
        setMyPhone(newPhone);
    };

    return (
        <>
            <h2>My phone is a {myPhone.brand} {myPhone.model}</h2>
            <p>it is {myPhone.color} from {myPhone.year}</p>
            <button onClick={changeColor}>Change color</button>
        </>
    );
};

export default Phone;