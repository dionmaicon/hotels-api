import { Hotel } from "../models/Hotel.js";
import RestService from "./RestService.js";

class HotelService extends RestService {
    constructor() {
        super(Hotel)
    }
 }

export default HotelService;
