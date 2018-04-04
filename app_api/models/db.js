const mongoose = require(mongoose);
const dbURI = 'mongodb://admintravel:21031991@ds012198.mlab.com:12198/webdata';
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