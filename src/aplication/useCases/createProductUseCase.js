class CreateProductUseCase {
    constructor(repository){
        this.repository = repository
    }

    async run(product) {
        return await this.repository.create(product)
    }
}

module.exports = {
    CreateProductUseCase
}