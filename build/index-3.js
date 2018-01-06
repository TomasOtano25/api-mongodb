"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const Product = require('./models/product');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*app.get('/hola', (req, res) => {
    res.send({ message : "Hola Mundo!"})
})*/
/*app.get('/hola/:name', (req, res) => {
    res.send({ message : `Hola ${req.params.name}!`})
})*/
app.get('/api/product', (req, res) => {
    Product.find({}, (err, products) => {
        if (err)
            return res.status(500).send({ message: `Error al realizar la peticion ${err}` });
        if (!products)
            return res.status(404).send({ message: "Los productos no existen" });
        res.status(200).send({ products });
    });
    /*Product.find({name:"MacBook Pro"}, (err, products) =>{
         res.status(200).send({ products })
    })*/
});
app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err)
            return res.status(500).send({ message: `Error al realizar la peticon: ${err}` });
        if (!product)
            return res.status(404).send({ message: `El producto no existe` });
        res.status(200).send({ product });
    });
});
app.post('/api/product', (req, res) => {
    console.log('POST /api/product');
    console.log(req.body);
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    product.save((err, productStored) => {
        if (err)
            return res.status(500).send({ message: `Error al salvar en la base de datos: ${err}` });
        res.status(201).send({ product: productStored });
    });
});
app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    let update = req.body;
    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err)
            return res.status(500).send({ message: `Error al actualizar el producto: ${err}` });
        res.status(200).send({ product: productUpdate });
    });
});
app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err)
            return res.status(500).send({ message: "Error al borrar el producto" });
        product.remove(err => {
            if (err)
                return res.status(500).send({ message: "Error al borrar el producto" });
            res.status(200).send({ message: "El producto ha sido eliminado" });
        });
    });
});
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    console.log('Conexion a la base de datos establecida...');
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`);
    });
});
//# sourceMappingURL=index-3.js.map