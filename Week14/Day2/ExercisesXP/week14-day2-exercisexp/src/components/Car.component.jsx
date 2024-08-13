import React from 'react';
import { Garage } from './Garage.component';
const carinfo = {name: "Ford", model: "Mustang"};

export function Car (){
    const color="red";
    return (
        <>
        <header>This car is a {carinfo.model}</header>
        <p>This car is {color}</p>
        <p>Garage Component:</p>
        <Garage size="small" />
        </>
    );
}