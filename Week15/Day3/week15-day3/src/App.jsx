import { useState, createContext } from 'react';
import Counter from './components/Counter';
import './App.css';

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
   
  return (
    <AppContext.Provider value={{count, setCount, name: 'John'}}>
      <h2>The createContext, useContext Hook</h2>
      <Counter />
    </AppContext.Provider>
  );
}

export default App;