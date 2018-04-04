const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({continent:String});
const visaSchema = new mongoose.Schema({continent:String});
const offerSchema = new mongoose.Schema({offer:String, price:String});

mongoose.model('place',placeSchema,'place');
mongoose.model('visa',visaSchema,'visa');
mongoose.model('offer',offerSchema,'offer');
