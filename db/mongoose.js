var mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
let dbPath = process.env.DATABASE;
mongoose.connect(dbPath, {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("database up and running");
});

module.exports = {mongoose};