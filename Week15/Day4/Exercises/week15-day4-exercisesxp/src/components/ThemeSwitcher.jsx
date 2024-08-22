import React, { createContext, useContext, useState } from "react";
import "./ThemeSwitcher.css";

const ThemeContext = createContext();



function ThemeProvider({ children }) {
    const body = document.getElementsByTagName("body")[0]; // Get the first body element
    const [theme, setTheme] = useState(body.className === "dark" ? "dark" : "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        body.className = newTheme; // Set the className of the body element
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };
