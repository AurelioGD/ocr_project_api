const express = require("express")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const app = express()
const routesServices = require("./routes/routerHub")
const morgan = require("morgan")
app.use(morgan("dev"))
app.use(cors())
app.use(fileUpload())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routesServices)

module.exports = app