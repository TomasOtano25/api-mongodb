"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var app = require('./app');
var config = require('./config');
mongoose.connect(config.db, function (err, res) {
    if (err) {
        return console.log("Error al conectar a la base de datos: " + err);
    }
    console.log('Conexion a la base de datos establecida...');
    app.listen(config.port, function () {
        console.log("API REST corriendo en http://localhost:" + config.port);
    });
});
//# sourceMappingURL=index.js.map