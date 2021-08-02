const express = require('express');
const router = express.Router();
const Controller = require("../controllers/HotelOffersController.js");
const hotelOffersController = new Controller();

router.get('/', (req, res) => {
  // #swagger.tags = ['Hotel Offers']
  // #swagger.description = 'Hotel Offers Get All offers'

  // #swagger.parameters['cityName'] = { description: 'City name' }

  /* #swagger.parameters['hotelName'] = {
         description: 'Hotel name',
         type: 'string'
  } */

  /* #swagger.parameters['hotelIds'] = {
         description: 'Hotel ids',
         type: 'array'
  } */

  /* #swagger.parameters['priceRange'] = {
         description: 'Price Range. It is mandatory to include a currency when this field is set',
         type: 'string',
         example: "100-300"
  } */

  /* #swagger.parameters['currency'] = {
         description: 'Currency',
         type: 'string',
         example: "USD"
  } */

  /* #swagger.parameters['page'] = {
         description: 'Page is Pagination option',
         type: 'integer'
  } */

  /* #swagger.parameters['size'] = {
         description: 'Size is quantity of items to show',
         type: 'integer'
  } */

  /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/HotelOffers" },
        description: 'Hotel Offers founded.'
  } */

  hotelOffersController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offers']
  // #swagger.description = 'Hotel Offers Read'
  hotelOffersController.getOne(req, res);
});

router.post('/', (req, res) => {
  // #swagger.tags = ['Hotel Offers']
  // #swagger.description = 'Hotel Offers Create '
  hotelOffersController.save(req, res);
});

router.put('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offers']
  // #swagger.description = 'Hotel Offers Update'
  hotelOffersController.update(req, res);
});

router.delete('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offers']
  // #swagger.description = 'Hotel Offers Delete'
  hotelOffersController.delete(req, res);
});

module.exports = router;
