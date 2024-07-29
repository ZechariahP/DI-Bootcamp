const express = require("express");
const { products } = require("./config/data.js");
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


/** static file */
app.use("/", express.static(__dirname + "/public"));

/** listner */
app.listen(5001, () => {
  console.log("run on 5001");
});



/** DELETE product */
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((element) => element.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found, can't delete" });
  }

  products.splice(index, 1);

  res.json(products);
});

/**  UPDATE product  */
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((element) => element.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found, can't update" });
  }

  products[index] = { ...products[index], name, price };

  res.json(products);
});

/**  Create product */
app.post("/api/products", (req, res) => {
  console.log(req.body);

  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
});

/** Read / Get all products */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/** Read / Get get one product */
app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const myprod = products.find((item) => item.id == id);

  if (!myprod) return res.status(404).json({ msg: "product not found" });

  res.json(myprod);
});

/** Read / Search products */
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    // return res.sendStatus(404);
    return res.status(404).json({ msg: "no product match your search" });
  }
  res.json(filtered);
});