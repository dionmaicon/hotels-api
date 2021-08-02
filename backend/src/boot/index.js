const startDB = require("./database.js");
const swaggerService = require("./swaggerService.js");

const boot = (app) => {
    
    console.log('Booting');

    startDB({
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    swaggerService(app);
};

module.exports = boot;