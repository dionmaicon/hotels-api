'use strict';

require('dotenv').config({
    path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const config = require("./src/config");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const endPoints = require("./src/routes/endPoints.js");
const boot = require("./src/boot/index.js");

endPoints(app);
boot(app);

app.listen(config.port, config.host);

console.log(`Running on http://${config.host}:${config.port}`);