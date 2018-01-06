import * as express from 'express'
//const express = require('express')
import * as bodyParser from 'body-parser'

const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)

export = app