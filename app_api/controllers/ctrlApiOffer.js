const mongoose = require('mongoose');

const placeModel = mongoose.model('place');

const placeList = function (req,res) {
    res
        .status(200)
        .json({""})
}