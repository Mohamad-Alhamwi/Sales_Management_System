const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs') ;
const passport = require('passport') ;

// Calling Models
const Salesperson = require('../models/salesperson') ;

//
const page_style = "../../css/signUp.css";


// Log In Page.
router.get('/login', (req, res) =>
{
    let page_title = "Log In";
    
    res.render(
    'logIn',
    {
        page_title,
        page_style
    });
});

// Sign Up Page.
router.get('/signup', (req, res) =>
{
    let page_title = "Sign Up";

    res.render(
    'signUp',
    {
        page_title,
        page_style
    });
});

// Sign Up Handle.
router.post('/signup', (req, res) => 
{
    const { first_name, last_name, email, password, c_password } = req.body;
    let errors = [];

    // Check required fields.
    if (!first_name || !last_name || !email || !password || !c_password) 
    {
        errors.push({ msg: 'Please enter all fields' });
    }

    // Check passwords match.
    if (password !== c_password) 
    {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check password length.
    if (password.length < 6) 
    {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    // Display Errors.
    if (errors.length > 0) 
    {
        res.render('signUp', 
        {
            errors,
            first_name,
            last_name,
            email,
            password,
            c_password
        });
    }

    // Validation Passed.
    else 
    {
        // Check if email exists.
        Salesperson.findOne( { where : { email: email } } )
        .then( (salesperson) => 
        {
            if (salesperson) 
            {
                // Email exists
                errors.push({ msg: 'Email already exists.' }) ;
                
                res.render('signUp', 
                {
                    errors,
                    first_name,
                    last_name,
                    email,
                    password,
                    c_password
                });
            }
            
            else 
            {
                const newSalesperson = new Salesperson(
                {
                    first_name,
                    last_name,
                    email,
                    password
                });

                bcrypt.genSalt(10, (err, salt) => 
                {
                    bcrypt.hash(newSalesperson.password, salt, (err, hash) => 
                    {
                        if (err) throw err;

                        // Set password to hashed.
                        newSalesperson.password = hash;

                        // Save salesperson.
                        newSalesperson
                        .save()
                        .then(salesperson => 
                        {
                            req.flash
                            (
                                'success_msg',
                                'You are now registered and can log in.'
                            );

                            res.redirect('/salespersons/login');
                        })
                        .catch(err => console.log(err));
                    });
                });
            }
        });
    }
});

// Login Handle.
router.post('/login', (req, res, next) => 
{
    passport.authenticate(
    'local', 
    {
        successRedirect: '/dashboard/statistics',
        failureRedirect: '/salespersons/login',
        failureFlash: true
    })(req, res, next);
});

// Logout Handle.
router.get('/logout', (req, res) => 
{
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/salespersons/login');
});


module.exports = router;