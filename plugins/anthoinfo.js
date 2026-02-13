let handler = async (m, { conn }) => {

let texto = `
╔════════════════════════════╗
║        P U N I R U - M D    ║
║      S I S T E M A  M E N U ║
╚════════════════════════════╝

╭────────────────────────────╮
│ Usuario: @${m.sender.split('@')[0]}🦈
│ Bot: Puniru-Md
│ Estado: Principal
│ Usuarios: 1,106
│ Version: v^1.8.2 | Latest
│ Comandos: 142
│ : Baileys Multi Device
╰────────────────────────────╯

════════════════════════════╗  
ＩＮＦＯＲＭＡＣＩＯＮ ＰＲＩＭＡＲＩＡ

• 𝙉𝙖𝙢𝙚: 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨

• 𝙀𝙙𝙖𝙙: 17

• 𝙋𝙧𝙚𝙘𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩: 8 🅳︎🄾🅻︎🄰🆁︎🄴🆂︎          
                                                                     
════════════════════════════╝  
 
            ✫𝐂𝐔𝐄𝐍𝐓𝐀𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒

• Discord: https://discord.gg/Mfbhrkbj
• TikTok: https://www.tiktok.com/@rezereze.md
• WhatsApp: https://wa.me/17089308726 WhatsApp 2: https://wa.me/qr/32WJDMYMDHBMB1
• YouTube: https://youtube.com/@antho-c6f
• Server: https://discord.gg/UFfFXXJsW
`

await conn.sendMessage(m.chat, {
  text: texto,
  mentions: [m.sender]
}, { quoted: m })

}

handler.help = ['𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨','cuervitainfo']
handler.command = ['𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨','cuervitainfo'] 
handler.tags = ['info']


export default handler