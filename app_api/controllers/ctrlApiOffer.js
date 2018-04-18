const mongoose = require('mongoose');

const offerModel = mongoose.model('offer');

const offerList = function (req,res) {
    offerModel.find({}, function (err, offers) {
        if (err){
            res.status(404).json(err);
        }
        else {
            res.status(200).json(offers);
        }
    })
};

const addOffer = function (req,res) {
    offerModel.create(req.body, function(err, newOffer){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newOffer);
        }
    })
};

module.exports = {
    offerList,
    addOffer
};

