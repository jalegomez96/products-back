const {ProductRouter} = require('./routes/product.routes')

const express = require('express')
const app = express()


app.use(express.json());

app.use(ProductRouter)



module.exports = {
    app
}