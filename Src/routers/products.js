const express = require("express");
const router = express.Router();
const {
  productCreate,
  productDelete,
  productList,
  ProductUpdate,
} = require("../controllers/productController");

//=====================routes==========

// products create

router.post("/", productCreate);

//Products Delete
router.delete("/", productDelete);

// products List
router.get("/", productList);

// product update
router.put("/", ProductUpdate);

module.exports = router;
