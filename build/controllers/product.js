"use strict";
var Product = require('../models/product');
/*import * as Product from '../models/product'*/
function getProduct(req, res) {
    var productId = req.params.productId;
    Product.findById(productId, function (err, product) {
        if (err)
            return res.status(500).send({ message: "Error al realizar la peticon: " + err });
        if (!product)
            return res.status(404).send({ message: "El producto no existe" });
        res.status(200).send({ product: product });
    });
}
function getProducts(req, res) {
    Product.find({}, function (err, products) {
        if (err)
            return res.status(500).send({ message: "Error al realizar la peticion " + err });
        if (!products)
            return res.status(404).send({ message: "Los productos no existen" });
        res.status(200).send({ products: products });
    });
    /*Product.find({name:"MacBook Pro"}, (err, products) =>{
         res.status(200).send({ products })
    })*/
}
function saveProduct(req, res) {
    console.log('POST /api/product');
    console.log(req.body);
    var product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    product.save(function (err, productStored) {
        if (err)
            return res.status(500).send({ message: "Error al salvar en la base de datos: " + err });
        res.status(201).send({ product: productStored });
    });
}
function updateProduct(req, res) {
    var productId = req.params.productId;
    var update = req.body;
    Product.findByIdAndUpdate(productId, update, function (err, productUpdate) {
        if (err)
            return res.status(500).send({ message: "Error al actualizar el producto: " + err });
        res.status(200).send({ product: productUpdate });
    });
}
function deleteProduct(req, res) {
    var productId = req.params.productId;
    Product.findById(productId, function (err, product) {
        if (err)
            return res.status(500).send({ message: "Error al borrar el producto" });
        product.remove(function (err) {
            if (err)
                return res.status(500).send({ message: "Error al borrar el producto" });
            res.status(200).send({ message: "El producto ha sido eliminado" });
        });
    });
}
module.exports = {
    getProduct: getProduct,
    getProducts: getProducts,
    saveProduct: saveProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};
//# sourceMappingURL=product.js.map