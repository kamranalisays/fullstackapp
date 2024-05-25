const  customHttpError =  require('../models/CustomHttpError')
const  customMessages =  require('../constants/CustomMessages');



// error Handlers


 const noRouteFoundErrorHandler = ( req , res , next ) => {
     next (new customHttpError( customMessages.NO_ROUTE_FOUND , 404));
 }


const generalErrorHandler= (error ,req ,res , next ) => {
   res.status(error.code || 500).json({message : error.message || "unknown error"});
}


exports.noRouteFoundErrorHandler = noRouteFoundErrorHandler ;
exports.generalErrorHandler = generalErrorHandler;