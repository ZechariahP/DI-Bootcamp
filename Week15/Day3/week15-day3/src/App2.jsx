import { useState, useRef, useEffect, nameRef, divRef, inputRef } from 'react';
import './App.css';

function App2() {
  const inputRef = useRef();
  const divRef = useRef();
  //console.log(divRef);
  const handleChange = () => {
    const value = inputRef.current.value;
    console.log(value);
    divRef.current.style.backgroundColor = 'yellow';
  }

  const changeName = () => {
    nameRef.current = 'Dan';
  }

  return (
    <div ref={divRef}>
      <h2>The useRef Hook</h2>
      <input 
        ref={inputRef} 
        name="username" 
        id="username" 
        onChange={handleChange}
      />
      <h2>My name is: {nameRef.current}</h2>
      <input onChange={() => changeName()} />
    </div>
  );
}

export default App2;