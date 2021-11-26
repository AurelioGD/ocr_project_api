const { Router } = require("express")
const routerHub = Router()

const imageService = require("../services/image/ImageRoutes.js")

routerHub.use(imageService)

module.exports = routerHub