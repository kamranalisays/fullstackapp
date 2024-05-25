// builtin  require modules
const express= require('express');
const bodyParser= require('body-parser');


// Custom require modules

// routes
const placesRoutes = require('./routes/places-routes');

// model
const customHttpError = require('./models/CustomHttpError');

// constant
const customMessages = require('./constants/CustomMessages');

// Utilities
const errorHandler = require('./utilities/ErrorHandler');


// declarations
const app = express();


// helper libraries
app.use(bodyParser.json());


//routes
app.use('/api/places',placesRoutes);




// errors
app.use(errorHandler.noRouteFoundErrorHandler);
app.use(errorHandler.generalErrorHandler);





app.listen(5000);