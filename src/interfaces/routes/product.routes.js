const { ProductController } = require('../controllers/product.controller')

const express = require("express");
const ProductRouter = express.Router();


ProductRouter.get('/productos', ProductController.getAll)
ProductRouter.post('/productos', ProductController.create)

module.exports = {
    ProductRouter
}

