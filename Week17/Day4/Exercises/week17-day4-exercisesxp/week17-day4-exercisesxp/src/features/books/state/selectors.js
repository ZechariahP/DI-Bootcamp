import { createSelector } from '@reduxjs/toolkit';
import { status, genre } from './slice';

export const selectStatus = createSelector([status], (state) => state.status)
export const selectSelectedGenre = createSelector([genre], (state) => state.selectedGenre)
export const selectBooks = createSelector([genre], (state) => state.books)