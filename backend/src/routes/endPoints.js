const express = require('express')

const router = express.Router()

const HotelOffersRoutes = require("./HotelOffersRoutes.js");
const HotelOfferRoutes = require("./HotelOfferRoutes.js");
const HotelRoutes = require("./HotelRoutes.js");

const initializeEndpoints = (app) => {
    
    router.use("/v1/hotel-offers", HotelOffersRoutes);
    router.use("/v1/hotel-offer", HotelOfferRoutes);
    router.use("/v1/hotel", HotelRoutes);

    app.use(router);
};

module.exports = initializeEndpoints;
