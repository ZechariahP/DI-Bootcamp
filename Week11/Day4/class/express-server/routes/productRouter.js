const express = require('express');

const router = express.Router();

const { products } = require("../config/data.js");

const { getAllProducts } = require("../controllers/productControllers.js");

router.get("/api/products", getAllProducts);





router.get("/api/products/:id", (req, res) => {
console.log(req.params);
const { id } = req.params;


const myprod = products.find((item) => item.id == id);

if (!myprod) return res.status(404).json({ msg: "product not found" });

res.json(myprod);
});

router.post("/api/products", getAllProducts);

module.exports = router;