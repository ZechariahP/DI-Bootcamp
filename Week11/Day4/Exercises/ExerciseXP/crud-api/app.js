const express = require('express');

const app = express();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const dataService = require('./data/dataService.js');

app.get('/api/posts', async (req, res) => {
    const posts = await dataService.fetchPosts();
    res.json(posts);
    console.log('Data retrieved and sent as response');
});




