

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const emojis = [
        { emoji: '😀', name: 'Smile' },
        { emoji: '🐶', name: 'Dog' },
        { emoji: '🌮', name: 'Taco' },
        { emoji: '🚀', name: 'Rocket' },
        { emoji: '🎉', name: 'Party' },
        { emoji: '🍕', name: 'Pizza' },
        { emoji: '🎈', name: 'Balloon' },
        { emoji: '🌈', name: 'Rainbow' },
        { emoji: '🎸', name: 'Guitar' },
        { emoji: '🎨', name: 'Art' },
        { emoji: '🚲', name: 'Bike' },
        { emoji: '🎧', name: 'Music' },
        { emoji: '📚', name: 'Book' },
        { emoji: '🎥', name: 'Movie' },
        { emoji: '🎮', name: 'Game' },
        { emoji: '🍔', name: 'Burger' },
        { emoji: '🍦', name: 'Ice Cream' },
        { emoji: '🍩', name: 'Donut' },
        { emoji: '🍭', name: 'Lollipop' },
        { emoji: '🍌', name: 'Banana' },
    ];
    res.send(emojis);
});

app.listen(3000);
