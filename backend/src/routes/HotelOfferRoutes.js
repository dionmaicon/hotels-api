const express = require('express');
const router = express.Router();
const Controller = require("../controllers/HotelOfferController.js");
const hotelOfferController = new Controller();

router.get('/', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Get All Offer'

  hotelOfferController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Read'
  hotelOfferController.getOne(req, res);
});

router.post('/', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Create '
  hotelOfferController.save(req, res);
});

router.put('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Update'
  hotelOfferController.update(req, res);
});

router.delete('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Delete'
  hotelOfferController.delete(req, res);
});

module.exports = router;
