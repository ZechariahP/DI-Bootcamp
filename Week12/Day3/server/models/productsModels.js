const {db} = require('../config/dbpg.js')

const getAllProducts = () => {
    return db('products2')
    .select('id', 'name', 'price')
    .orderBy('name')
};

const insertProduct = (name, price) => {
    return db('products2')
    .insert({name, price})
    .returning(['id', 'name', 'price'])
};

module.exports = {
    getAllProducts,
    insertProduct
};
