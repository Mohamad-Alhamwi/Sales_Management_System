const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

//
const page_style = "../../css/dashboard.css";

router.get('/statistics', ensureAuthenticated, (req, res) =>
{
    let page_title = "Statistics";
    let path = "/dashboard/statistics";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/customers', ensureAuthenticated, (req, res) =>
{
    let page_title = "Customers";
    let path = "/dashboard/customers";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/services', ensureAuthenticated, (req, res) =>
{
    let page_title = "Services";
    let path = "/dashboard/services";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/products', ensureAuthenticated, (req, res) =>
{
    let page_title = "Products";
    let path = "/dashboard/products";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/visits', ensureAuthenticated, (req, res) =>
{
    let page_title = "Visits";
    let path = "/dashboard/visits";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/orders', ensureAuthenticated, (req, res) =>
{
    let page_title = "Orders";
    let path = "/dashboard/orders";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
    });
});

router.get('/bills', ensureAuthenticated, (req, res) =>
{
    let page_title = "Bills";
    let path = "/dashboard/bills";

    res.render(
    'dashboard', 
    {
        page_title,
        page_style,
        path
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