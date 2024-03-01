require('dotenv').config()

const path = require('path');

// Obtiene el path actual del directorio donde se está ejecutando el script
const currentPath = path.resolve();



const CONFIG = {
    aplication: {
        port: process.env.APPHOST | "4000"
    },
    database: {
        dialect: 'sqlite',
        storage: path.join(currentPath,'db/database.sqlite')
    }
}

module.exports = {
    CONFIG
}