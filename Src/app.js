const express = require("express");
const cors = require("cors");
const slugify = require("slugify");
const ProdcutsRoutes = require("./routers/products");
// const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use("/products", ProdcutsRoutes);

//start New server
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
