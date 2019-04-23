const User_Account = require('../models/user_account.model');


// create user
exports.user_create = function (req, res) {
    let user = new User_Account(
        {
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }
    );

    user.save(function (err) {
        if (err) {
            // eslint-disable-next-line 
            return next(err);
        }
        res.send('user Created successfully')
    })
};

// controllers/products.controller.js
exports.user_details = function (req, res) {
    User_Account.findById(req.params.id, function (err, user_account) {
        // eslint-disable-next-line 
        if (err) return next(err);
        res.send(user_account);
    })
};