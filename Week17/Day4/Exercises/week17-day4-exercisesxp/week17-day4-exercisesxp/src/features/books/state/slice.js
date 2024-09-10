import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'; // Add this line
import { books } from '../../../app/data';

const initialState = {
  books: [],
  status: 'idle',
  genre: 'All Genres',
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
      return books;
    }
  );

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    selectBooks: (state) => {
      state.books = books;
    },
    selectBooksByGenre: (state, action) => {
      const selectedGenre = action.payload;
      state.books = books.filter(book => book.genre === selectedGenre);
    },
    selectedGenre: (state) => {
          return state.genre;
      }, // Add a comma here
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'success';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
  },
});

export const status = (state) => state.books.status;
export const genre = (state) => state.books.genre;

export const { setGenre, selectBooksByGenre, selectedGenre } = booksSlice.actions;
export default booksSlice.reducer;