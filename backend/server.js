'use strict';

import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});

import express from 'express';

import pkg from 'body-parser';

const {json } = pkg;
import cors from "cors";

import { port, host } from "./src/config/index.js";

const app = express();
app.use(json());
app.use(cors());

import endPoints from "./src/routes/endPoints.js";
import boot from "./src/boot/index.js";

endPoints(app);
boot(app);

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
