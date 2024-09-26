import React, { useState } from 'react';
import axios from 'axios';
import { TextField, List, ListItem, ListItemText, Paper } from '@mui/material';

const SearchBar = ({ onSelectLocation }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete`, {
          params: {
            apikey: import.meta.env.VITE_ACCUWEATHER_API_KEY,
            q: value,
          },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.LocalizedName);
    setSuggestions([]);
    onSelectLocation(suggestion.LocalizedName);
  };

  return (
    <div>
      <TextField
        label="Search for a city"
        value={query}
        onChange={handleInputChange}
        fullWidth
      />
      {suggestions.length > 0 && (
        <Paper>
          <List>
            {suggestions.map((suggestion) => (
              <ListItem
                button
                key={suggestion.Key}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <ListItemText primary={suggestion.LocalizedName} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;