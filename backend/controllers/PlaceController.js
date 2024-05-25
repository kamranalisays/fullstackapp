const customHttpError = require('../models/CustomHttpError');
const customMessages = require('../constants/CustomMessages');
const dummyData = require('../dummy/dummydata');



const getPlaceById =  (req ,res , next) => {
    console.log('GET Request in Places');
    const placeId = req.params.placeId; 

    const place = dummyData.find(p => {
        return p.id === placeId;
      });
    
      if(!place){
  
        return  next (new customHttpError( customMessages.NO_DATA_FOUND , 404));

      }
      else {
     res.json({place});
      }
}


const getPlacesByUserId =  (req ,res , next) => {
    console.log('GET Request in Places');
    const userId = req.params.userId; 

    const places = dummyData.find(p => {
        return p.creator === userId;
      });
    
      if(!places){
  
        return  next (new customHttpError( customMessages.NO_DATA_FOUND , 404));

      }
      else {
     res.json({places});
      }
}



const createPlace =  (req ,res , next) => {
  console.log('POST createPlace ');

  const   { title , description , coordinates , address , creator} = req.body; 

  const createdPlace = { title , description , location :coordinates , address , creator }; 

  dummyData.push(createdPlace);


  console.log('POST createPlace  dummyData='+ JSON.stringify(dummyData) );
  res.status(201).json(createdPlace);
 
}



exports.getPlaceById = getPlaceById ;
exports.getPlacesByUserId = getPlacesByUserId ;
exports.createPlace = createPlace ;
