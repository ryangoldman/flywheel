// app.js

// define requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// initialize express app
const app = express();

// setup mongoose connection
const mongoDB = 'mongodb://127.0.0.1/flywheelDB';
mongoose.connect(mongoDB, {useNewUrlParser: true});
// use global promise library
mongoose.Promise = global.Promise;
// get the connection
const db = mongoose.connection;
// bind connection to an error event
db.on('error', console.error.bind(console, 'The database blew up.'));

// create route for users
const user = require('./routes/user.route');

// define middleware
app.use('/users', user);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// spin up the server
let port = 1234;

app.listen(port, ()=> {
    console.log(`Server is running on port number ${port}.`);
});