class GetAllProductsUseCase {
    constructor(repository){
        this.repository = repository
    }

    async run() {
        return await this.repository.getAll()
    }
}

module.exports = {
    GetAllProductsUseCase
}