import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.weather.favorites);
  const navigate = useNavigate();

  const handleFavoriteClick = (location) => {
    navigate('/', { state: { location } });
  };

  return (
    <Grid container spacing={2}>
      {favorites.map((location) => (
        <Grid item key={location.Key} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{location.LocalizedName}</Typography>
              <Typography variant="body1">{location.WeatherText}</Typography>
              <Typography variant="body2">Temperature: {location.Temperature.Metric.Value}°C</Typography>
              <Button onClick={() => handleFavoriteClick(location)}>View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoritesList;