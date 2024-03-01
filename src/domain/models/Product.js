const { DataTypes }= require('sequelize')
const sequelize = require('../config/sequelize.config')
const { v4: uuidv4 } = require('uuid');

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_category:{
        type: DataTypes.UUID,
        allowNull: true,
    },
})

module.exports = {
    Product,
    sequelize
}