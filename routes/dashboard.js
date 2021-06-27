const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

//
const page_style = "../../css/dashboard.css";

router.get('/statistics', ensureAuthenticated, (req, res) =>
{
    let page_title = "Statistics";

    const { first_name, last_name, email } = req.user;

    res.render(
    'dashboard', 
    {
        first_name,
        last_name,
        email,
        page_title,
        page_style
    });
});

module.exports = router;