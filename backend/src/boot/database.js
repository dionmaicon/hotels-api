import mongoose from 'mongoose';
const { connect } = mongoose;
let { Promise } = mongoose;

import { dbConnection } from "../config/index.js";

const startDB = async ( options ) => {

    Promise = global.Promise;

    await connect(dbConnection, options ).then(() => {
        console.log("Connected to database");
    }).catch(err => {
        console.log("Couldn't connect to the database. Exiting now...", err);
        process.exit();
    });
}

export default startDB;