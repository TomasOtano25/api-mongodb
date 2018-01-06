import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'

//const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*app.get('/hola', (req, res) => {
    res.send({ message : "Hola Mundo!"})
})*/

/*app.get('/hola/:name', (req, res) => {
    res.send({ message : `Hola ${req.params.name}!`})
})*/

app.get('/api/product', (req, res) => {
    res.status(200).send({products:[]})})

app.get('/api/product/:productId', (req, res) => {
    res.status(200).send({product:{}})
})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(201).send({message:"Producto insertado correctamente"})
})

app.put('/api/product/:productId', (req, res) => {
    res.status(200).send({message:"Producto actualizado correctamente"})
})

app.delete('/api/product/:productId', (req, res) => {
    res.status(200).send({message:"Producto eliminado correctamente"})
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err){/*throw err*/
        return console.log(`Error al conectar a la base de datos: ${err}`) 
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})

