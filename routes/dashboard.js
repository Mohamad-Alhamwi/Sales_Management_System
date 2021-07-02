const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

//
const page_style = "../../css/dashboard.css";

router.get('/statistics', ensureAuthenticated, (req, res) =>
{
    let page_title = "Statistics";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style
    });
});

router.get('/profile', ensureAuthenticated, (req, res) =>
{
    let page_title = "Salesperson Profile";

    res.render(
    'profile', 
    {
        page_title,
        page_style
    });
});

module.exports = router;