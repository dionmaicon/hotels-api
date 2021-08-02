const express = require('express');
const router = express.Router();
const Controller = require("../controllers/HotelController.js");
const hotelController = new Controller();

router.get('/', (req, res) => {
  // #swagger.tags = ['Hotel']
  // #swagger.description = 'Hotel Get All'

  hotelController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  // #swagger.tags = ['Hotel']
  // #swagger.description = 'Hotel Read'
  hotelController.getOne(req, res);
});

router.post('/', (req, res) => {
  // #swagger.tags = ['Hotel']
  // #swagger.description = 'Hotel Create '
  hotelController.save(req, res);
});

router.put('/:id', (req, res) => {
  // #swagger.tags = ['Hotel']
  // #swagger.description = 'Hotel Update'
  hotelController.update(req, res);
});

router.delete('/:id', (req, res) => {
  // #swagger.tags = ['Hotel']
  // #swagger.description = 'Hotel Delete'
  hotelController.delete(req, res);
});

module.exports = router;
