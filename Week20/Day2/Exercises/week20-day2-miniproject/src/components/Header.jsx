import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Header = ({ darkMode, setDarkMode, onLocationSelect }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleSelectLocation = (location) => {
    onLocationSelect(location.Key);
  };

  const handleToggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);;
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <h1>Weather App</h1>
      <button onClick={handleToggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

export default Header;