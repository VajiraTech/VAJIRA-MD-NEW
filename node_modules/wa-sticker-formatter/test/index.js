const axios = require('axios')
const path = require('path')
const { writeFileSync } = require('fs-extra')
const WSF = require('../lib')

async function create(image){

    console.log(WSF)
    image = await axios.get(image, { responseType: 'arraybuffer'})
    const sticker = new WSF.Sticker(image.data, { crop: false, animated: false })
    await sticker.build()
    const buffer = await sticker.get()
    writeFileSync(path.join(__dirname, 'test.webp'), buffer)
}

create('https://static.wikia.nocookie.net/virtualyoutuber/images/9/97/Watson_Amelia_Portrait.png/revision/latest/top-crop/width/360/height/450?cb=20200910193116')
