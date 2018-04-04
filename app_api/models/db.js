const mongoose = require(mongoose);
const dbURI = 'mongodb://admin:admin @ds012168.mlab.com:12168/traveldata';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Connected to ${dbURI}');
});

mongoose.connection.on('error', function(err){
    console.log('Connection error!',err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Disconnected');
});

require('.appSchemas');