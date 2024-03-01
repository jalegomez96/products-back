const { Sequelize } = require('sequelize');
const { CONFIG } = require('../../infraestructure/config/config.js')

module.exports = new Sequelize(CONFIG.database);