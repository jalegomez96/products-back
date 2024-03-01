const { CreateProductUseCase } = require('../../aplication/useCases/createProductUseCase')
const { GetAllProductsUseCase } = require('../../aplication/useCases/getAllProductsUseCase')
const { ProductRepository } = require('../../domain/repositories/productRepository')

class ProductController {

    static async create(req,res){
        const createProductUseCase = new CreateProductUseCase(new ProductRepository())
        const {name, description, price, stock} = req.body
        res.json(createProductUseCase.run({name, description, price, stock}))
    }
    static async getAll(req,res){
        const getAlllProductsUseCase = new GetAllProductsUseCase(new ProductRepository())
        res.json(await getAlllProductsUseCase.run())
    }
}

module.exports = {
    ProductController
}