const express = require('express');
const router = express.Router();

const ctrlApiPlace = require('../controllers/ctrlApiPlace');
const ctrlApiVisa = require('../controllers/ctrlApiVisa');
const ctrlApiOffer = require('../controllers/ctrlApiOffer');

router
    .route('/Place')
    .get(ctrlApiPlace.placeList);
    .post(ctrlApiPlace.addPlace);

router
    .route('/Visa')
    .get(ctrlApiVisa.visaList);
    .post(ctrlApiVisa.addVisa);

router
    .route('/Offer')
    .get(ctrlApiOffer.offerList);
    .post(ctrlApiOffer.addOffer);