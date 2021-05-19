const express = require('express');
const router = express.Router();

// Log In Page.
router.get('/login', (req, res) =>
{
    res.render('logIn');
});

// Sign Up Page.
router.get('/signup', (req, res) =>
{
    res.render('signUp');
});

module.exports = router;