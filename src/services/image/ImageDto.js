const Tesseract = require('tesseract.js');

const getTextByImage = async(image) => {
    const { data: { text } } = await Tesseract.recognize( image.data, 'eng')
    const sliced = text.split("\n")
    const joined = sliced.join(" ")
    return joined
}

module.exports = {
    getTextByImage
}

