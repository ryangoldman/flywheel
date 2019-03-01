const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
    firstName: { type: String },
    lastName : { type: String },
    title    : { type: String },
    phone    : { type: Number },
    email    : { type: String },
    stree1   : { type: String },
    street2  : { type: String },
    city     : { type: String },
    state    : { type: String },
    zip      : { type: Number }
});

module.exports = mongoose.model( 'User', UserSchema );