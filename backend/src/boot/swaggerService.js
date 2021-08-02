const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../../swagger_output.json')

const swagger = (app) => {
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

module.exports = swagger;