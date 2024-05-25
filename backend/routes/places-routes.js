const express = require('express');
const router = express.Router();
const placesController = require('../controllers/PlaceController');




router.get('/:placeId', placesController.getPlaceById);
router.get('/:userId',placesController.getPlacesByUserId );

router.post('/',placesController.createPlace);

module.exports = router ;