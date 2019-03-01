const express = require('express');
const bodyParser = require('body-parser');

// initialize express app
const app = express();

// create route for users
const user = require('./routes/user.route');
app.use('/users', user);

// spin up the server
let port = 1234;

app.listen(port, ()=> {
    console.log(`Server is running on port number ${port}.`);
});