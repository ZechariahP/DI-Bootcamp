// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationKey, setLocationKey] = React.useState(null); // State for locationKey
  const [isCelsius, setIsCelsius] = React.useState(true); // State for temperature unit

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Function to update locationKey
  const handleLocationSelect = (key) => {
    setLocationKey(key);
  };

  // Function to toggle temperature unit
  const handleToggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onLocationSelect={handleLocationSelect}
          isCelsius={isCelsius}
          onToggleTemperatureUnit={handleToggleTemperatureUnit}
        />
        <Routes>
          <Route path="/" element={<WeatherPage locationKey={locationKey} isCelsius={isCelsius} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;