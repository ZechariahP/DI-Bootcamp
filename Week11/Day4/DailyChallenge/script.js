/*
Create a fun emoji guessing game using an Express API.
The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
The game will keep track of the player’s score and provide feedback on their guesses.

Requirements:

Set up an Express server to handle the game.

Create an array of emoji objects, each containing the emoji character and its corresponding name.


Generate a random emoji from the array and select a few incorrect options as distractors.

Using a form, present the player with the random emoji and multiple choice options (including the correct name).

Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.

Check if the guess is correct and update the player’s score.

Provide feedback to the player, indicating whether their guess was correct or not.

Continue presenting new emojis and options for the player to guess.

Keep track of the player’s total score.

Implement a leaderboard to show the top scores.
sample emojis

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];
Advanced Features (Optional):

Add a time limit for each guess.
Implement user authentication to save and display personalized scores.
Use emojis from a larger dataset or an external API.
Implement difficulty levels that affect the number of options or time limit.
Implement a “hint” feature that provides a clue about the emoji’s name.
*/
const emojis = require('./server.js');

document.addEventListener('DOMContentLoaded', () => {
    const emojiElement = document.getElementById('emoji');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    const formElement = document.getElementById('form');

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(formElement);
        const guess = formData.get('guess');
        game.checkGuess(guess);
        game.nextRound();
        renderGame();
    });

    function renderGame() {
        emojiElement.textContent = game.currentEmoji.emoji;
        optionsElement.innerHTML = '';
        game.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.value = option;
            optionsElement.appendChild(button);
        });
        feedbackElement.textContent = game.feedback;
        scoreElement.textContent = `Score: ${game.score}`;
    }

    game.startGame();
    renderGame();
});

function getRandomEmoji(emojis) {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function getDistractors(emojis, correctName, numDistractors) {
    const distractors = [];
    while (distractors.length < numDistractors) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        if (randomEmoji.name !== correctName && !distractors.includes(randomEmoji.name)) {
            distractors.push(randomEmoji.name);
        }
    }
    return distractors;
}

function getOptions(correctName, distractors) {
    const options = [...distractors, correctName];
    return options.sort(() => Math.random() - 0.5);
}

function createGame(emojis) {
    const game = {
        score: 0,
        currentEmoji: null,
        options: [],
        correctName: '',
        feedback: '',
        startGame() {
            this.nextRound();
        },
        nextRound() {
            this.currentEmoji = getRandomEmoji(emojis);
            this.correctName = this.currentEmoji.name;
            const distractors = getDistractors(emojis, this.correctName, 3);
            this.options = getOptions(this.correctName, distractors);
            this.feedback = '';
        },
        checkGuess(guess) {
            if (guess === this.correctName) {
                this.score++;
                this.feedback = 'Correct!';
            } else {
                this.feedback = 'Incorrect. Try again!';
            }
        },
    };
    return game;
}

const game = createGame(emojis);

module.exports = game;

