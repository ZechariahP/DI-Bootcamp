import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchBooks } from './slice';
import { selectBooks, selectStatus, selectSelectedGenre } from './selectors';

export const useBooksSelector = () => {
    return useSelector(selectBooks);
};

export const useBooksStatus = () => {
    return useSelector(selectStatus);
};

export const useFetchBooks = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
};

export const useSelectedGenreBooks = () => {
    const selectedGenre = useSelector(selectSelectedGenre);
    const books = useSelector(selectBooks);

    return useMemo(() => {
        if (selectedGenre) {
            return books.filter(book => book.genre === selectedGenre);
        } else {
            return books;
        }
    }, [selectedGenre, books]);
};
