import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeSwitcher";
import { CharacterCounter } from "./components/Counter";
import { TodoList } from "./components/ToDoList";

import "./App.css";
import "./components/ThemeSwitcher.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}


function App() {

    return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
      <CharacterCounter />
      <TodoList />
    </ThemeProvider>
    

  );
}

export default App;


    
