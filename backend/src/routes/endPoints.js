import { Router } from 'express';

const router = Router()

import HotelOffersRoutes from "./HotelOffersRoutes.js";
import OfferRoutes from "./OfferRoutes.js";
import HotelRoutes from "./HotelRoutes.js";

const initializeEndpoints = (app) => {
    
    router.use("/v1/hotel-offers", HotelOffersRoutes);
    router.use("/v1/offers", OfferRoutes);
    router.use("/v1/hotels", HotelRoutes);

    router.use("/v1/", (req, res) => {
        res.status(200).json({
            message: "Welcome to the Hotel Offers API"
        })
    });

    app.use(router);
};

export default initializeEndpoints;
