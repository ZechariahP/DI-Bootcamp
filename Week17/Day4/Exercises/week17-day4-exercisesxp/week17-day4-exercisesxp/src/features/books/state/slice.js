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
  },
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
});

export const selectStatus = (state) => state.books.status;
export const sliceState = (state) => state.books;
export const selectBooks = (state) => state.books.books;
export const selectGenre = (state) => state.books.genre;

export const { setGenre, selectBooksByGenre } = booksSlice.actions;
export default booksSlice.reducer;