"use strict";
var mongoose = require('mongoose');
var User = require('../models/user');
var service = require('../services');
function signUp(req, res) {
    var user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password //Si funciona el pre no es necesario este parametro
    });
    user.save(function (err, user) {
        if (err)
            return res.status(500).send({ message: "Error al crear el usuario " + err });
        res.status(200).send({ token: service.createToken(user) });
    });
}
function signIn(req, res) {
}
module.exports = {
    signUp: signUp,
    signIn: signIn
};
//# sourceMappingURL=auth.js.map