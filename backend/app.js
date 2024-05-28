//   require modules
const express= require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose')



// Custom require modules

// Config
const environmentVariables = require('./config/EnvironmentVariables');

// routes
const placesRoutes = require('./routes/placesRoutes');
const userRoutes   = require('./routes/UserRoutes');

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
app.use('/api/users',userRoutes);




// errors
app.use(errorHandler.noRouteFoundErrorHandler);
app.use(errorHandler.generalErrorHandler);


mongoose.connect(environmentVariables.DB_CONNECTION_STRING).then().catch(error => {console.log(error)});




app.listen(5000);