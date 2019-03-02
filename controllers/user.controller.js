// controllers/user.controller.js

const User = require('../models/user.model');

exports.user_all = function(req, res, next){
    User.find({})
        .sort({ createdAt: -1})
        .exec(function(err, users){
            if(err) return next(err);
            res.json(users);
        });
}

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_create = function (req, res) {
    let user = new User(
        {
            firstName: 'Francesca',
            lastName: 'Alvarez-Goldman',
            email: 'bellacesca@gmail.com'
        }
    );

    user.save(function(err){
        if(err){
            return next(err);
        };
        res.send('User created successfully.')
    });
}