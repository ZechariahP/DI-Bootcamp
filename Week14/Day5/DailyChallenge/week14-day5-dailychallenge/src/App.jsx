import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+');

  const handleNum1 = (e) => {
    setNum1(parseInt(e.target.value));
  };

  const handleNum2 = (e) => {
    setNum2(parseInt(e.target.value));
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <div>
        <h2>Adding/Subtracting/Multiplying/Dividing Two Numbers</h2>
      </div>
      <input type="number" onChange={handleNum1} />
      <select onChange={handleOperation}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={handleNum2} />
      <div>
       <button onClick={handleCalculate}>Calculate</button> 
      </div>
      
      <h1>{result}</h1>
    </div>
  );
}

export default App;