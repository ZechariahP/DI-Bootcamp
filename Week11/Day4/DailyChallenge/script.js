let randomEmoji = {}

function getRandom() {
    fetch('http://localhost:3000/emojis')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        randomEmoji = data.randomEmoji;
        let options = data.shuffleEmojis;
        console.log(randomEmoji);
        console.log(options);
        render(randomEmoji, options);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

getRandom();

function render(emoji, options) {
    const html = options.map((item) => {
        return `${item.name}`;
    });
    document.getElementById('root').innerHTML = "options:" + html.join('') + "hint:" + emoji.emoji;
}

function guessEmoji() {
    const guess = document.getElementById('guess').value;
    const name = randomEmoji.name;

    fetch('http://localhost:3000/emojis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, guess}),
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        if (data.result === 'correct') {
            document.getElementById('msg').innerHTML = 'Correct! Your score is ' + data.score;
            getRandom();
        } else {
            document.getElementById('msg').innerHTML = 'Incorrect! Try again';
        }
    })
}