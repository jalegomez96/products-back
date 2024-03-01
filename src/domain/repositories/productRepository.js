const {Product,sequelize} = require('../models/Product')

class ProductRepository {

    async sync(){
        await sequelize.sync()
    }
    async create(user) {
        await this.sync()
        return await Product.create(user)
    }
    async getAll(user) {
        await this.sync()
        return await Product.findAll()
    }
}


module.exports = {
    ProductRepository
}