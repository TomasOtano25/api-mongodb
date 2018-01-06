import *  as express from 'express';
const api = express.Router()
const productCtrl = require('../controllers/product')
/*import * as ProductCtrl from './controllers/product';*/
const auth = require('../middlewares/auth')
const userCtrl  = require('../controllers/user')


api.get('/product', productCtrl.getProducts)

api.get('/product/:productId', productCtrl.getProduct)

api.post('/product', productCtrl.saveProduct)

api.put('/product/:productId', productCtrl.updateProduct)

api.delete('/product/:productId', productCtrl.deleteProduct)


api.get('/private', auth, (req, res) =>{
    res.status(200).send({ message: "Tienes acceso" })
})

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

/*api.post('/product', auth, productCtrl.saveProduct)

api.put('/product/:productId', auth, productCtrl.updateProduct)

api.delete('/product/:productId', auth, productCtrl.deleteProduct)*/


export = api