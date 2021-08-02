const Service = require("../services/HotelOffersService.js");
const { HotelOffers } = require("../models/HotelOffers.js");

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getCondition = (req) => {
  const { cityName, hotelName, hotelIds, priceRange, currency } = req.query;
  let condition = {};

  if (cityName) {
    condition['hotel.address.cityName'] = { $regex: new RegExp(cityName), $options: "i" };
  }

  if (hotelIds) {
    condition['hotel.hotelId'] = { $in: hotelIds };
  }

  if (hotelName) {
    condition['hotel.name'] = { $regex: new RegExp(hotelName), $options: "i" };
  }

  if (priceRange && currency) {

    let values = priceRange.split("-");
    let range = values.filter(v => v !== "");

    if (range.length > 1) {
      condition['offers.price.total'] = { $lte: range[1] }
      condition['offers.price.total'] = { $gte: range[0] }
      condition['offers.price.currency'] = currency
    }

    if (range.length === 1) {
      condition['offers.price.total'] = { $lte: range[0] }
      condition['offers.price.currency'] = currency
    }
  }
  
  return condition;

}

class HotelOffersController {

  constructor() {
    this.hotelOffers = new Service(HotelOffers);
  }

  save(req, res) {
    
    if (!req.body) {
      res.status(400).send({
        data: [],
        message: "Undefined parameters."
      });
    }

    this.hotelOffers.save(req.body)
      .then(response => {

        if (response.success === false) {
          res.status(400).send({
            data: [],
            message: response.message
          });
        } else {
          res.status(201).send({
            data: [],
            message: "Created with success."
          });
        }

      }).catch(err => {
        res.status(500).send({
          data: [],
          message: "Server Error " + err.message
        });
      });
  }

  getAll(req, res) {
    const { page, size } = req.query;

    let condition = getCondition(req);
    
    const { limit, offset } = getPagination(page, size);

    HotelOffers.paginate(condition, { offset, limit })
      .then((data) => {
        res.send({
          totalItems: data.totalDocs,
          data: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          data: [],
          message:
            err.message || "Not Found.",
        });
      });
  }

  getOne(req, res) {
    
    let id = req.params.id;

    this.hotelOffers.getOne(id).then(response => {

      if (response) {
        res.status(200).send(response);
      } else {
        res.status(404).send({
          success: false,
          message: "Not found"
        });
      }

    }).catch(err => {
      res.status(500).send({
        success: false,
        message: "Server Error " + err.message
      });
    });
  }

  update(req, res) {
    
    let id = req.params.id;

    this.hotelOffers.update(id, req.body)
      .then(response => {

        if (response) {
          res.status(200).send({
            success: true,
            message: "Hotel Offers updated with success."
          });
        } else {
          res.status(404).send({
            success: false,
            message: "Not Found"
          });
        }

      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Server Error " + err.message
        });
      });
  }

  delete(req, res) {
    
    let id = req.params.id;

    this.hotelOffers.delete(id)
      .then(response => {
        if (response) {
          res.status(200).send({
            success: true,
            message: "Hotel Offers deleted with success."
          });
        } else {
          res.status(404).send({
            success: false,
            message: "Not Found"
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Server Error " + err.message
        });
      });
  }
}

module.exports = HotelOffersController;
