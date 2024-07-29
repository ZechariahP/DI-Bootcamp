const {getAllProducts, insertProduct} = require('../models/productsModels.js');

const _getAllProducts = async (req, res) => {
    try {
        const result = await getAllProducts();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertProduct = async (req, res) => {
    const {name, price} = req.body;
    try {
        const result = await insertProduct(name, price);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllProducts, _insertProduct
};