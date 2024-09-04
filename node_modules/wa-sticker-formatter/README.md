<div align="center">
<img src="https://wallpapercave.com/wp/wp8493901.png" alt="WATCIKER" width="500" />

# _**WA-STICKER-FORMATTER**_

> Made for your sticker creation needs
>
>
</div><br/>
<br/>

# 🏮 Installation
```cmd
> npm i wa-sticker-formatter
```

# 🎋 Usage

## Importing
###  💛 JavaScript
```JS
const WSF = require('wa-sticker-formatter')
```
### 💙 TypeScript
```TS 
import * as WSF from 'wa-sticker-formatter'
```

## 🎨 Creating Sticker

### Regular Sticker

```JS
const fs = require('fs') //import * as fs from 'fs'
const image = fs.readFileSync('./image.png') //any image buffer would work

const sticker = new WSF.Sticker(image, {})
await sticker.build()
const sticBuffer = await sticker.get()


//sending with Baileys
conn.sendMessage(jid, sticBuffer, MessageType.sticker)

//saving to file
fs.writeFile('sticker.webp', sticBuffer)

```

### Non-streched sticker 

```JS
const fs = require('fs') //import * as fs from 'fs'
const image = fs.readFileSync('./image.png') //any image buffer would work

const sticker = new WSF.Sticker(image, { crop: false })
await sticker.build()
const sticBuffer = await sticker.get()


//sending with Baileys
conn.sendMessage(jid, sticBuffer, MessageType.sticker)

//saving to file
fs.writeFile('sticker.webp', sticBuffer)
```

### Non-cropped Animated sticker 
```JS

const fs = require('fs') 
const image = fs.readFileSync('./image.mp4') //any Video buffer would work

const sticker = new WSF.Sticker(image, { crop: false, animated: true })
await sticker.build()
const sticBuffer = await sticker.get()


//sending with Baileys
conn.sendMessage(jid, sticBuffer, MessageType.sticker)

//saving to file
fs.writeFile('sticker.webp', sticBuffer)
```
### Sticker with Pack and Author Name

```JS

const fs = require('fs') //import * as fs from 'fs'
const image = fs.readFileSync('./image.mp4') //any image buffer would work

const sticker = new WSF.Sticker(image, { crop: false, animated: true, pack: 'Pack', author: 'AUTHOR' })
await sticker.build()
const sticBuffer = await sticker.get()


//sending with Baileys
conn.sendMessage(jid, sticBuffer, MessageType.sticker)

//saving to file
fs.writeFile('sticker.webp', sticBuffer)
```


