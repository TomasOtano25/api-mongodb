"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
//const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*app.get('/hola', (req, res) => {
    res.send({ message : "Hola Mundo!"})
})*/
/*app.get('/hola/:name', (req, res) => {
    res.send({ message : `Hola ${req.params.name}!`})
})*/
app.get('/api/product', (req, res) => {
    res.status(200).send({ products: [] });
});
app.get('/api/product/:productId', (req, res) => {
    res.status(200).send({ product: {} });
});
app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(201).send({ message: "Producto insertado correctamente" });
});
app.put('/api/product/:productId', (req, res) => {
    res.status(200).send({ message: "Producto actualizado correctamente" });
});
app.delete('/api/product/:productId', (req, res) => {
    res.status(200).send({ message: "Producto eliminado correctamente" });
});
app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
});
//# sourceMappingURL=index-1.js.map