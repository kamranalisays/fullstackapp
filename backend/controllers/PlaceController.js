const { validationResult} = require('express-validator');

const customHttpError = require('../models/CustomHttpError');
const customMessages = require('../constants/CustomMessages');
const customError = require('../models/CustomError');
const Place = require('../models/place');



const getPlaceById = async (req ,res , next) => {
    console.log('GET Request in Places');
    const placeId = req.params.placeId; 

    
    let place ;

    try {
       place = await Place.findById(placeId);
    } catch (error) {
      console.log(error);
      return  next (error);
      
    }

     res.json({place});
    
}


const getPlacesByUserId = async (req ,res , next) => {
    console.log('GET Request in Places');
    const userId = req.params.userId; 
    
    let places ;

    try {
      places = await Place.find({ creator: userId });

    } catch (error) {
      console.log(error);
      return  next (error);
      
    }

     res.json({places});
}



const createPlace = async (req ,res , next) => {
  console.log('POST createPlace '+  JSON.stringify(req.body));
  const errors =validationResult(req);

  if(!errors.isEmpty)
    {
      console.log('POST createPlace errors'+  JSON.stringify(errors));
    return next(new customError("Invalid input data", 422));
    }

  const   { title , description  , address , creator} = req.body; 


  const createdPlace = new Place({
    title,
    description,
    address,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
    creator
  });

  try {
    await createdPlace.save();
  } catch (err) {

    return  next (new customHttpError( 'Creating place failed, please try again.',
    500));
    
  }

  res.status(201).json(createdPlace);
 
}


const updatePlaceById = async (req , res , next) =>{
  const {title , description} = req.body ;
  const placeId = req.params.placeId ;
  
  let place;
  try {
    place = await Place.findByIdAndUpdate(placeId ,   { $set: { title: title  , description:description} },  { returnOriginal: false } );
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }



  res.status(200).json({ place: place.toObject({ getters: true }) });


} ;


const deletePlaceById = async (req , res , next) => {
const placeId  = req.params.pid ;

let place;
try {
  place = await Place.findByIdAndDelete(placeId);
} catch (err) {
  const error = new HttpError(
    'Something went wrong, could not delete place.',
    500
  );
  return next(error);
}

res.status(200).json({ message: 'Deleted place.' });

} ;








exports.getPlaceById = getPlaceById ;
exports.getPlacesByUserId = getPlacesByUserId ;
exports.createPlace = createPlace ;
exports.updatePlaceById = updatePlaceById ;
exports.deletePlaceById = deletePlaceById ;
