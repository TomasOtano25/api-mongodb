import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:String,
    picture:String,
    /*price:Number,*/
    price:{
        type:Number,
        default:0
    },
    category: {
        type:String,
        enum:['computers', 'phones', 'accesories']
    },
    description:String
})

module.exports = mongoose.model('Product', ProductSchema)
