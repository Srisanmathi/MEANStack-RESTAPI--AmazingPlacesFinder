const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@amazingplacesdatabase-cyh2v.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true             //To remove some console deprecation warning
  },
  );
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log("We are connected to MongoDB!");
  });

const placeSchema = new mongoose.Schema({
    name :  String,
    state : String,
    country : String,
    rating : Number
});

const Place = mongoose.model('places',placeSchema);   //places is collection name. Database name is 'test' by default 
module.exports = Place;
  
