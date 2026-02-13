import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = ['6287774831869','17089308726','584142424614','85295456491',]
global.suittag = ["6287774831869"]
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "𝙥𝙪𝙣𝙞𝙧𝙪-𝙢𝙙"
global.textbot = "𝙥𝙪𝙣𝙞𝙧𝙪-𝙢𝙙 𝙢𝙖𝙙𝙚 𝙬𝙞𝙩𝙝 𝙗𝙮 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨"
global.dev = "© 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨  𒆜"
global.author = "© 𝙢𝙖𝙙𝙚 𝙬𝙞𝙩𝙝 𝙗𝙮 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨 𒆜"
global.etiqueta = "𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨"
global.currency = "¥enes"
global.banner = "https://i.ibb.co/vCgsQgrM/IMG-20260122-WA0074.jpg"
global.icono = "https://i.ibb.co/sJPTvfvn/IMG-20260122-WA0075.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/Irj78sgSOGkKsiWvg8u8UR"
global.community = "https://chat.whatsapp.com/EgjxTFBOZjYB4SiAHN4yct"
global.channel = "https://whatsapp.com/channel/0029VbBtRks6hENk3fF6Hq1U"
global.github = "https://github.com/The-King-Destroy/YukiBot-MD"
global.gmail = "thekingdestroy507@gmail.com"
global.ch = {
ch1: "120363422726081136@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://api.xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'Destroy-xyz' }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
