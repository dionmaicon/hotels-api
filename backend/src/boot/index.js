import startDB from "./database.js";
import swaggerService from "./swaggerService.js";

const boot = (app) => {
    
    console.log('Booting');

    startDB({
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    swaggerService(app);
};

export default boot;