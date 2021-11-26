const express = require("express")
const fileUpload = require('express-fileupload')
const app = express()
const routesServices = require("./routes/routerHub")

app.use(fileUpload())

app.use(routesServices)

module.exports = app