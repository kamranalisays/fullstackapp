const express = require('express');
const { check } = require('express-validator');


const placesController = require('../controllers/PlaceController');

const router = express.Router();


router.get('/:placeId', placesController.getPlaceById);
router.get('/:userId',placesController.getPlacesByUserId );

router.post('/',
             [check('title').not().isEmpty() 
             ] ,
              placesController.createPlace);

router.patch('/:placeId',placesController.updatePlaceById);

router.delete('/:placeId',placesController.deletePlaceById);



module.exports = router ;