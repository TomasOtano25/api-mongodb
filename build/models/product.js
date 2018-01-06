"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: String,
    picture: String,
    /*price:Number,*/
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['computers', 'phones', 'accesories']
    },
    description: String
});
module.exports = mongoose.model('Product', ProductSchema);
//# sourceMappingURL=product.js.map