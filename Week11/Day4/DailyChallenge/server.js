

const express = require('express');
const cors = require('cors');
let score = 0;

const {emojis}= require('./config/emojis');

const app = express();

app.use(cors());

//body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', express.static('/public'));

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('/emojis', (req, res) => {
    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndx];
    res.json({
        randomEmoji,
        shuffleEmojis: shuffleArray(emojis),
    });
});

app.post('/emojis', (req, res) => {
    const {name, guess} = req.body;
    if (name === guess) {
        score++;
        return res.json({result: 'correct', score, code: 100});
    } else {
        res.json({result: 'incorrect'});
    }
});

