const express = require('express');
require('dotenv').config();

const products_router = require('./routes/productsRouter.js');
const app = express();

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/products2', products_router);