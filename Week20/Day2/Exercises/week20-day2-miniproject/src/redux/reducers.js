const initialState = {
    isCelsius: true,
    favorites: [], // Ensure this is initialized as an empty array
    // other state properties
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_TEMPERATURE_UNIT':
        return {
          ...state,
          isCelsius: !state.isCelsius,
        };
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(id => id !== action.payload),
        };
      // other cases
      default:
        return state;
    }
  };
  
  export default weatherReducer;