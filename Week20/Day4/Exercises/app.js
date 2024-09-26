require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const { verifyJWT } = require('./middleware/authMiddleware');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);
app.use('/protected', verifyJWT, protectedRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error syncing database:', err);
});