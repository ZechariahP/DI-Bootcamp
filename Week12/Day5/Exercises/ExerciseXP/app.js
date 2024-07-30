const taskRouter = require('./routes/taskRouter.js');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3012, () => {
    console.log('Server is running on port 3012');
    });

app.use('/', taskRouter);