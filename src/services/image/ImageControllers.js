const { getTextByImage } = require("./ImageDto.js") 

const imageocrController = async(req,res) => {
    const text = await getTextByImage(req.files.file)
    res.json({
        text
    })
}
module.exports = {
    imageocrController
}