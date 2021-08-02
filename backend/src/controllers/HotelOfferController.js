const Service = require("../services/HotelOfferService.js");
const { HotelOffer } = require("../models/HotelOffer");

class HotelOfferController {

  constructor() {
    this.hotelOffer = new Service(HotelOffer);
  }

  save(req, res) {
    
    if (!req.body) {
      res.status(400).send({
        data: [],
        message: "Undefined parameters."
      });
    }

    this.hotelOffer.save(req.body)
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

    this.hotelOffer.getAll()
      .then(response => {
        res.status(200).send(response);
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Server Error " + err.message
        });
      });
  }

  getOne(req, res) {
    
    let id = req.params.id;

    this.hotelOffer.getOne(id).then(response => {

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

    this.hotelOffer.update(id, req.body)
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

    this.hotelOffer.delete(id)
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

module.exports = HotelOfferController;
