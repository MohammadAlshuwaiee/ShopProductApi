const express = require("express");

const cors = require("cors");
let products = require("./data");
const slugify = require("slugify");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/products", (req, res) => {
  const id = products[products.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newProduct = { id, slug, ...req.body }; // id, slug are equivalent to id: id, slug: slug
  products.push(newProduct);
  res.json(newProduct);
  res.status(201).json(newCookie);
});

app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => product !== foundProduct);
    res.status(204).end();
  } else {
    res.status(404).res.json({ message: "poduct not found" });
  }
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});