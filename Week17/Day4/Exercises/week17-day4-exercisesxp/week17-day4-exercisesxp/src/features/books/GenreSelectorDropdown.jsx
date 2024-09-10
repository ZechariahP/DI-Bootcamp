import { memo } from 'react';

const genreSelection = [
    'All Genres',
    'Fantasy',
    'Science Fiction',
    'Dystopian',
    'Action & Adventure',
    'Mystery',
    'Horror',
    'Thriller & Suspense',
    'Historical Fiction',
    'Romance',
    'Contemporary Fiction',
    'Literary Fiction',
    'Magical Realism',
    'Graphic Novel',
    'Short Story',
    'Young Adult',
    'Children\'s',
    'Memoir & Autobiography',
    'Biography',
    'Food & Drink',
    'Art & Photography',
    'Self-Help',
    'History',
    'Travel',
    'True Crime',
    'Humor',
    'Essays',
    'Guide/How-To',
    'Religion & Spirituality',
    'Humanities & Social Sciences',
    'Parenting & Families',
    'Science & Technology',
    'Children\'s Nonfiction',
];

const GenreSelectorDropdown = () => {
    const renderGenres = genreSelection.map((genre) => {
        return (
            <option key={genre} value={genre}>{genre}</option>
        );
    });
    return (
        <select>
            {renderGenres}
        </select>
    );
};


const MemoizedGenreSelectorDropdown = memo(GenreSelectorDropdown);
export default MemoizedGenreSelectorDropdown;