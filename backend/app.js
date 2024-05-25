// builtin  require modules
const express= require('express');
const bodyParser= require('body-parser');


// Custom require modules
const placesRoutes = require('./routes/places-routes');


// declarations
const app = express();


app.use(bodyParser.json());

app.use('/api/places',placesRoutes);


app.use((error ,req ,res , next ) => {
  
   res.status(error.code || 500).json({message : error.message || "unknown error"});

});


app.listen(5000);