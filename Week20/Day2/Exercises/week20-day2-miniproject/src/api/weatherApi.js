import axios from 'axios';

const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

export const getCurrentWeather = async (locationKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
        params: {
            apikey: API_KEY,
        },
    });
    return response.data;
};

export const get5DayForecast = async (locationKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
        params: {
            apikey: API_KEY,
        },
    });
    return response.data;
};

export const getLocationKey = async (cityName) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
        params: {
            apikey: API_KEY,
            q: cityName,
        },
    });
    return response.data[0]; // Assuming the first result is the desired location
};