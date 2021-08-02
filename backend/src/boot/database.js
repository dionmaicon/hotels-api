const mongoose = require('mongoose');
const config = require("../config");

const startDB = async ( options ) => {

    mongoose.Promise = global.Promise;

    await mongoose.connect(config.dbConnection, options ).then(() => {
        console.log("Connected to database");
    }).catch(err => {
        console.log("Couldn't connect to the database.Exiting now...", err);
        process.exit();
    });
}

module.exports = startDB;