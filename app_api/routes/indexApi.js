const express = require('express');
const router = express.Router();

const ctrlApiPlace = require('../controllers/ctrlApiPlace');
const ctrlApiVisa = require('../controllers/ctrlApiVisa');
const ctrlApiOffer = require('../controllers/ctrlApiOffer');

router
    .route('/Place')
    .get(ctrlApiPlace.placeList)
    .post(ctrlApiPlace.addPlace);

