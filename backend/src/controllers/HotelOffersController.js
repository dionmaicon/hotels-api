import HotelOffersService from "../services/HotelOffersService.js";
import RestController from "./RestController.js";

class HotelOffersController extends RestController {

  constructor() {
    super(new HotelOffersService());
  }

  getAll(req, res) {
    this.service.getAllPaginated(req.query).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      res.status(500).send({
        success: false,
        message: "Server Error " + err.message
      });
    });
  }
}

export default HotelOffersController;
