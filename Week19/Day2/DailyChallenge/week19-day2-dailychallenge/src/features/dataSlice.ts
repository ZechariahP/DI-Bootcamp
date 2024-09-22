import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../api/api';
import { Recipe } from '../types/types';

interface DataState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  recipes: [],
  loading: false,
  error: null,
};

export const fetchRecipesAsync = createAsyncThunk('data/fetchRecipes', async () => {
  const response = await fetchRecipes();
  return response;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch recipes';
      });
  },
});

export default dataSlice.reducer;