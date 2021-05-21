// ...
// ..
// .

// Modules Initialization
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');


// 
const dashboard = require('./routes/dashboard');
const salespersons = require('./routes/salespersons');


//
dotenv.config();


// 
const sequelize = require('./config/db');


// Creating the express application.
const app = express();


// Serving static files.
app.use(express.static(path.join(__dirname, 'public')));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Routes.
app.use('/', dashboard);
app.use('/salespersons', salespersons);


// Creating PORT to run the app on.
const PORT = process.env.PORT || 5000;


// Taking app object and listen to it.
app.listen(PORT, '0.0.0.0', console.log(`Server is running on port ${PORT}`));