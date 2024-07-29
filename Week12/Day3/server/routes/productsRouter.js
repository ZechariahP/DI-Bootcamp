const express = require('express');
const {_getAllProducts, _insertProduct} = require('../controllers/productsController.js');

const router = express.Router();

router.get('/all', _getAllProducts);
router.post('/create', _insertProduct);

module.exports = router;