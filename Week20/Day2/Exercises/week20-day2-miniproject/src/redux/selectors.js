import { createSelector } from 'reselect';

const selectWeather = (state) => state.weather || {};

export const selectFavorites = createSelector(
  [selectWeather],
  (weather) => {
    console.log('selectFavorites called');
    return weather.favorites || [];
  }
);
