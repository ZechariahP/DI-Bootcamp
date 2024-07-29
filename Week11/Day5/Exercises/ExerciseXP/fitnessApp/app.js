const express = require('express');
require('dotenv').config();

const exercises_router = require('./routes/exercisesRoutes.js');
const users_router = require('./routes/userRoutes.js');
const workouts_router = require('./routes/workoutRoutes.js');
const user_workouts_router = require('./routes/userWorkoutsRoutes.js');

const app = express();

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/exercises', exercises_router);
app.use('/users', users_router);
app.use('/workouts', workouts_router);
app.use('/user_workouts', user_workouts_router);