const mongoose = require('mongoose');

const visaModel = mongoose.model('visa');

const visaList = function (req,res) {
    visaModel.find({}, function (err, visas) {
        if (err){
            res.status(404).json(err);
        }
        else {
            res.status(200).json(visas);
        }
    })
};

const addVisa = function (req,res) {
    visaModel.create(req.body, function(err, newVisa){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newVisa);
        }
    })
};

module.exports = {
    visaList,
    addVisa
};

