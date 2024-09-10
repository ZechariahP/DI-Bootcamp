import { useState, useEffect } from 'react';
import { useSelectedGenreBooks } from './state/hooks';
import GenreSelectorDropdown from './GenreSelectorDropdown';


const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const books = useSelectedGenreBooks();

    useEffect(() => {
    }, [selectedGenre]);

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const BookInventory = () => (
        <>
            <h2>Book Inventory</h2>
            <GenreSelectorDropdown onChange={handleGenreChange} />
            return (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Genre: {book.genre}</p>
                        </li>
                    ))}
                </ul>
            );
        </>
    );

    return <BookInventory />;
};

export default BookList;
