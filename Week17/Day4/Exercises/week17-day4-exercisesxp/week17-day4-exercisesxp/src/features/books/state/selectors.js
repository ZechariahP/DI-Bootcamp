import { createSelector } from '@reduxjs/toolkit';
import { sliceState } from './slice';

export const selectBooks = createSelector([sliceState], (state) => state.books)

export const selectStatus = createSelector([sliceState], (state) => state.status)

export const selectSelectedGenre = createSelector([sliceState], (state) => state.selectedGenre)