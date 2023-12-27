import { serve, setup } from 'swagger-ui-express';
import swaggerFile from '../../swagger_output.json' assert { type: "json" };

const swagger = (app) => {
    app.use('/doc', serve, setup(swaggerFile))
}

export default swagger;