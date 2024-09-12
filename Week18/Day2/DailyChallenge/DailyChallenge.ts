/** 
 * Instructions
Create a simple library system with TypeScript:

Interface Book: Define an interface Book with the following properties:

title (string)
author (string)
isbn (string)
publishedYear (number)
An optional genre property (string)
Class Library: Create a class Library with:

A private property books (array of Book).
A public method addBook to add a new book to the library.
A public method getBookDetails that returns details of a book based on the isbn.
Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

A readonly property website (string) for the library’s website.
A public method listBooks that returns a list of all book titles in the library.
Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.
 */

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    protected books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    getBookDetails(isbn: string): Book {
        return this.books.find(book => book.isbn === isbn) as Book;
    }
}

class DigitalLibrary extends Library {
    readonly website: string = 'https://www.example.com';

    listBooks(): string[] {
        return this.books.map((book: Book) => book.title);
    }
}

const library = new DigitalLibrary();

library.addBook({
    title: 'Book 1',
    author: 'Author 1',
    isbn: '123456',
    publishedYear: 2021
});

library.addBook({
    title: 'Book 2',
    author: 'Author 2',
    isbn: '789012',
    publishedYear: 2022,
    genre: 'Fiction'
});

library.addBook({
    title: 'Book 3',
    author: 'Author 3',
    isbn: '345678',
    publishedYear: 2023,
    genre: 'Non-fiction'
});

console.log(library.getBookDetails('123456'));
console.log(library.getBookDetails('789012'));
console.log(library.getBookDetails('345678'));
console.log(library.listBooks());

