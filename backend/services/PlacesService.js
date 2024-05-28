const Place = require('../models/place');



const getPlaceById = async (placeId) => {
    console.log('GET Request in Places');
  

    
    let place ;

    try {
       place = await Place.findById(placeId);
    } catch (error) {
      console.log(error);
      return  error;
      
    }

    return place;
    
}
