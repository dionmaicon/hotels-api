import { Offer } from "../models/Offer.js";
import RestService from "./RestService.js";

class OfferService extends RestService {
    constructor() {
       super(Offer);
    }
}

export default OfferService;
