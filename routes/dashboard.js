const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

router.get('/statistics', ensureAuthenticated, (req, res) =>
{
    page_title = "Statistics";

    const { first_name, last_name, email } = req.user;

    res.render(
    'dashboard', 
    {
        first_name,
        last_name,
        email,
        page_title
    });
});

module.exports = router;