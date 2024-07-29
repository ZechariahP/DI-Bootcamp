const products = require('../config/data.js')

const getAllProducts = (req, res) => {
    res.json(products);
}

module.exports = {getAllProducts};