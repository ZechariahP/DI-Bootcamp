const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");



const bp = require("body-parser");



// console.log(products);

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors());

/** logger */
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};


const auth = (req, res, next) => {
  const {admin} = req.query;
  if (admin === 'true') {
    next();
  } else {
    res.send({msg: 'you are not admin'})
  }
}

app.use(logger)
app.use(auth);

/** static file */
app.use('/', express.static('/public'));



app.listen(5001, () => {
  console.log("run on 5001");
});

app.use('/', productsRouter);
app.use('/users', usersRouter);

/** get one product */
/** params */


/** query */
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    // return res.sendStatus(404);
    return res.status(404).json({msg: 'no product match your search'})
  }
  res.json(filtered);
});







/**
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 */

// app.get("/users", (req, res) => {
//   let users = [
//     { name: "John", age: 401 },
//     { name: "Anne", age: 45 },
//     { name: "Marry", age: 21 },
//   ];
//   //   res.status(404).json(users);
//   res.sendStatus(404);
// });

// app.post("/users", (req, res) => {
//   res.send("hello form users route 1 ");
// });

