import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions';
import { selectFavorites } from '../redux/selectors';

const WeatherCard = memo(({ weather }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  if (!weather || !weather.id) {
    return null; // or some fallback UI
  }

  const isFavorite = favorites.includes(weather.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(weather.id));
    } else {
      dispatch(addFavorite(weather.id));
    }
  };

  return (
    <div className="weather-card">
      <h3>{weather.name}</h3>
      <p>{weather.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
});

export default WeatherCard;