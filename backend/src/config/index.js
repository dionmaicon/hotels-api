module.exports = {
    port: process.env.API_PORT || 3001,
    host: process.env.HOST || '0.0.0.0',
    dbConnection: process.env.MONGO_DB_CONNECTION_URI,
}