const express = require('express');

const app = express();

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
    { id: 3, title: 'Book 3', author: 'author 3', publishedYear: 2022 }
];

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.json(book);
        res.status(200);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.use(express.json());

app.post('/api/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});


