
const jwt = require('jsonwebtoken');

/**
 * jwt.sign ->
 * payload - {}
 * secret code - string
 * { expiration time - ms, s, m, h, d, w, m, y }
 */

//const expiredTime = Math.floor(Date.now() / 1000) + 15 * 60;

const accessToken = jwt.sign(
    { userid: 101, name: 'John Doe', email: 'johndoe@gmail.com' },
    '123$%^&*alkdfq234r5',
    { expiresIn: "120s" },
);

const refreshToken = jwt.sign(
    { userid: 101, name: 'John Doe', email: 'johndoe@gmail.com' },
    '123$%^&*alkdfq234r5',
    { expiresIn: "7d" },
);

//console.log(token);

/* const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEwMSwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTcyNzE5MjE4NiwiZXhwIjoxNzI3MTkyMjQ2fQ.Ypi8Icy_-Fsse9ViSkyFK9_EQ5PfU8PeSjJkqsmw83g'; */

/**
 * jwt.verify
 * token
 * secret
 * (error, decoded) => {}
 */

jwt.verify(token, '123$%^&*alkdfq234r5', (error, decoded) => {
    if (error) {
        return console.log(error.message);
    }
    console.log(decoded);
})