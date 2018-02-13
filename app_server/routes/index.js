const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');
const ctrlOffer = require('../controllers/ctrlOffer');
const ctrlPlace = require('../controllers/ctrlPlace');
const ctrlVisa = require('../controllers/ctrlVisa');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/Offer', ctrlOffer.offerlist);
router.get('/Place', ctrlPlace.placelist);
router.get('/Visa', ctrlVisa.visalist);

module.exports = router;
