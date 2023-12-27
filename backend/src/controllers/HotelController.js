import HotelService from "../services/HotelService.js";
import RestController from "./RestController.js";

class HotelController extends RestController {
  constructor() {
    super(new HotelService());
  }
}

export default HotelController;
