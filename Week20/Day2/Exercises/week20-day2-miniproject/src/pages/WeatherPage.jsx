import React, { useState, useEffect } from 'react';
import { getCurrentWeather, get5DayForecast, getLocationKey } from '../api/weatherApi'; // Ensure getLocationKey is imported
import SearchBar from '../components/SearchBar'; // Import the SearchBar component

const telAvivLocationKey = '215854'; // Tel Aviv's location key

const WeatherPage = () => {
    const [locationKey, setLocationKey] = useState(telAvivLocationKey); // Set initial state to Tel Aviv's location key
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]); // Initialize forecast as an empty array
    const [cityName, setCityName] = useState('Tel Aviv'); // Initialize city name to Tel Aviv
    const [isCelsius, setIsCelsius] = useState(true); // State to track temperature unit

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                if (!locationKey) {
                    throw new Error('locationKey is required');
                }

                const currentWeatherData = await getCurrentWeather(locationKey);
                console.log('Current weather data:', currentWeatherData); // Debugging information
                setCurrentWeather(currentWeatherData[0]); // Access the first element of the array

                const forecastData = await get5DayForecast(locationKey);
                console.log('Forecast data:', forecastData); // Debugging information

                if (forecastData && Array.isArray(forecastData.DailyForecasts)) {
                    setForecast(forecastData.DailyForecasts);
                    setCityName(forecastData.Headline.Link.split('/')[5]); // Extract city name from the link
                } else {
                    throw new Error('Forecast data is not an array');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [locationKey]); // Ensure useEffect depends on locationKey

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const handleCityChange = async (cityName) => {
        try {
            const locationKeyData = await getLocationKey(cityName);
            if (locationKeyData && locationKeyData.Key) {
                setLocationKey(locationKeyData.Key);
                setCityName(locationKeyData.LocalizedName);
            } else {
                throw new Error('City not found');
            }
        } catch (error) {
            console.error('Error fetching location key:', error);
        }
    };

    return (
        <div>
            <h1>Weather in {cityName}</h1> {/* Display city name */}
            <button onClick={toggleTemperatureUnit}>
                {isCelsius ? 'Convert to Fahrenheit' : 'Convert to Celsius'}
            </button>
            <SearchBar onCitySelect={handleCityChange} /> {/* Pass the callback function to SearchBar */}
            {currentWeather && currentWeather.Temperature && (
                <div>
                    <h2>Current Weather</h2>
                    <p>
                        Temperature: {isCelsius ? currentWeather.Temperature.Metric.Value : currentWeather.Temperature.Imperial.Value}°
                        {isCelsius ? 'C' : 'F'}
                    </p>
                    <p>Condition: {currentWeather.WeatherText}</p>
                </div>
            )}
            {forecast.length > 0 && (
                <div>
                    <h2>5-Day Forecast</h2>
                    <ul>
                        {forecast.map((day, index) => (
                            <li key={index}>
                                <p>Date: {day.Date}</p>
                                <p>
                                    Min Temperature: {day.Temperature && day.Temperature.Minimum && (isCelsius ? (day.Temperature.Minimum.Unit === 'C' ? day.Temperature.Minimum.Value : (day.Temperature.Minimum.Value - 32) * 5/9) : (day.Temperature.Minimum.Unit === 'F' ? day.Temperature.Minimum.Value : day.Temperature.Minimum.Value * 9/5 + 32))}°
                                    {isCelsius ? 'C' : 'F'}
                                </p>
                                <p>
                                    Max Temperature: {day.Temperature && day.Temperature.Maximum && (isCelsius ? (day.Temperature.Maximum.Unit === 'C' ? day.Temperature.Maximum.Value : (day.Temperature.Maximum.Value - 32) * 5/9) : (day.Temperature.Maximum.Unit === 'F' ? day.Temperature.Maximum.Value : day.Temperature.Maximum.Value * 9/5 + 32))}°
                                    {isCelsius ? 'C' : 'F'}
                                </p>
                                <p>Condition: {day.Day.IconPhrase}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WeatherPage;