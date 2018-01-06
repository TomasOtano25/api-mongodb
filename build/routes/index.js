"use strict";
var express = require("express");
var api = express.Router();
var productCtrl = require('../controllers/product');
/*import * as ProductCtrl from './controllers/product';*/
api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);
api.post('/product', productCtrl.saveProduct);
api.put('/product/:productId', productCtrl.updateProduct);
api.delete('/product/:productId', productCtrl.deleteProduct);
module.exports = api;
//# sourceMappingURL=index.js.map