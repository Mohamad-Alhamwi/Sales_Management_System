// ...
// ..
// .

// Modules Initialization
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');

// 
const dashboard = require('./routes/dashboard');
const salespersons = require('./routes/salespersons');


//
dotenv.config();


// Models 
const Salesperson = require('./models/salesperson') ;


// 
const sequelize = require('./config/db');


// Creating the express application.
const app = express();


// Configure the app to be able to parse the body of the request.
app.use(express.urlencoded(
{
    extended: true
}));

app.use(express.json());


// Express Session Midlleware.
app.use(session(
{
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


// Connect Flash.
app.use(flash());


// Serving static files.
app.use(express.static(path.join(__dirname, 'public')));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Global Variables.
app.use((req, res, next) =>
{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Routes.
app.use('/', dashboard);
app.use('/salespersons', salespersons);


// Creating PORT to run the app on.
const PORT = process.env.PORT || 5000;

// Syncing table to database.
sequelize.sync()
.then(result =>
{
    // Taking app object and listen to it.
    app.listen(PORT, '0.0.0.0', console.log(`Server is running on port ${PORT}`));
})
.catch(err =>
{
    console.log(err);
});


