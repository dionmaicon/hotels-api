import { Router } from 'express';
const router = Router();
import Controller from "../controllers/OfferController.js";
const offerController = new Controller();

router.get('/', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Get All Offer'

  offerController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Read'
  offerController.getOne(req, res);
});

router.post('/', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Create '
  offerController.save(req, res);
});

router.put('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Update'
  offerController.update(req, res);
});

router.delete('/:id', (req, res) => {
  // #swagger.tags = ['Hotel Offer']
  // #swagger.description = 'Hotel Offer Delete'
  offerController.delete(req, res);
});

export default router;
