import React from 'react';
import './App.css';
import Test from './components/Test.jsx';
import TestClass from './components/TestClass.jsx';
import Counter from './components/Counter.jsx';
import Users from './components/Users.jsx';

function App() {
  return (
    <>
        <h2>Class vs. Function component</h2>
        <Test text="Hello World"/>
        <TestClass text="Hello World"/>
        <Counter />
        <Users />
    </>
  );
}

export default App;