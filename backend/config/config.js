require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        database: process.env.DB_NAME_DEV,
        host: process.env.DB_HOST_DEV,
        dialect: process.env.DB_DIALECT_DEV,
    },
    test: {
        username: process.env.DB_USER_TEST,
        password: process.env.DB_PASS_TEST,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST_TEST,
        dialect: process.env.DB_DIALECT_TEST,
    },
    production: {
        username: process.env.DB_USER_PROD,
        password: process.env.DB_PASS_PROD,
        database: process.env.DB_NAME_PROD,
        host: process.env.DB_HOST_PROD,
        dialect: process.env.DB_DIALECT_PROD,
    },
}