const { Router } = require("express")
const imageRouter = Router()

const { imageocrController } = require("./ImageControllers")

imageRouter.post("/imageocr", imageocrController)


module.exports = imageRouter