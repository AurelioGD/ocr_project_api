const { getTextByImage } = require("./ImageDto.js") 
const template = (text) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .title{
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 class="title">Se reconocio tu Texto: </h1>
        <p class="text">${text}</p>
    </body>
    </html>`
}
const imageocrController = async(req,res) => {
    const text = await getTextByImage(req.files.file)
    res.status(400).send(template(text))
}
module.exports = {
    imageocrController
}