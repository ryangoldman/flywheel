// controllers/user.controller.js

const User = require('../models/user.model');

// create a new user
exports.user_create = function (req, res) {
    let user = new User(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
    );

    user.save(function(err){
        if(err){
            return next(err);
        };
        res.send('User created successfully.')
    });
}

// read all users
exports.user_all = function(req, res, next){
    User.find({})
        .sort({ createdAt: -1})
        .exec(function(err, users){
            if(err) return next(err);
            res.json(users);
        });
}

// read one user by ID
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

// update one user by ID
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};