const { getTextByImage } = require("./ImageDto.js") 
const template = (text) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <style>
            body{
                display:flex;
                justify-content:center;
            }
            .title{
                text-align: center;
            }
            .container{
                width:60%;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="title text-3xl">Se reconocio tu Texto: </h1>
            <p class="text">${text}</p>
        </div>
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