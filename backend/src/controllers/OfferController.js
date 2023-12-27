import OfferService from "../services/OfferService.js";
import RestController from "./RestController.js";

class OfferController extends RestController {
  constructor() {
    super(new OfferService());
  }
}

export default OfferController;
