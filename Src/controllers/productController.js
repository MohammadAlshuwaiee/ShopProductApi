let products = require("../routers/products");
const slugify = require("slugify");

exports.productCreate = (req, res) => {
  const id = products[products.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true }); // adding (-) between the name of item name with small letter at the beginning.
  const newProduct = { id, slug, ...req.body }; // id, slug are equivalent to id: id, slug: slug
  products.push(newProduct);
  res.json(newProduct);
  res.status(201).json(newProduct);
};

//Delete Function
exports.productDelete = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => product !== foundProduct);
    res.status(204).end();
  } else {
    res.status(404).res.json({ message: "poduct not found" });
  }
};
//Update Function
exports.ProductUpdate = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    for (const key in req.body) foundProduct[key] = req.body[key];
    Set.status(204).end();

    // foundProduct.name = req.body.name;
    // foundProduct.slug = req.body.slug;
    // foundProduct.description = req.body.description;
    // foundProduct.price = req.body.price;
    // foundProduct.image = req.body.image;
  } else {
    res.status(404).json({ message: "product not found" });
  }
};

exports.productList = (req, res) => {
  res.json(products);
};
