const express = require('express');

const app = express();

app.use(express.json());

const data = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first post.'
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the second post.'
    }
];

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.post('/posts', (req, res) => {
    const post = req.body;
    data.push(post);
    res.status(201).json(post);
});

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find(post => post.id === id);
    if (post) {
        Object.assign(post, req.body);
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(post => post.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

