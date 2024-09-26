export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const TOGGLE_TEMPERATURE_UNIT = 'TOGGLE_TEMPERATURE_UNIT';

// Action Creators
export const addFavorite = (location) => ({
  type: ADD_FAVORITE,
  payload: location,
});

export const removeFavorite = (locationKey) => ({
  type: REMOVE_FAVORITE,
  payload: locationKey,
});

export const toggleTemperatureUnit = () => ({
  type: TOGGLE_TEMPERATURE_UNIT,
});