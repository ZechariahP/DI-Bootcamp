import { useState, useEffect } from 'react';
import { useBooksSelector } from './state/hooks';
import GenreSelectorDropdown from './GenreSelectorDropdown';

const BookList = () => {
    const fetchedBooks = useBooksSelector();
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
    }, []);

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const filteredBooks = fetchedBooks.filter((book) => {
        if (selectedGenre) {
            return book.genre === selectedGenre;
        }
        return true;
    });

    const BookInventory = () => (
        <>
            <h2>Book Inventory</h2>
            <GenreSelectorDropdown onChange={handleGenreChange} />
            <ul>
                {filteredBooks.map((book, id) => (
                <li key={id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </>
    );

    return <BookInventory />;
};

export default BookList;
