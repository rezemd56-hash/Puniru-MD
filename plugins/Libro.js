let handler = async (m, { conn, usedPrefix, command }) => {
  
  let texto = `
 *GUÍA DE COMANDOS*

Aquí está mi libro sobre la guía de comandos 
🌐 https://amber-liesa-11.tiiny.site
`.trim()

  await conn.sendMessage(m.chat, {
    text: texto
  }, { quoted: m })
}

handler.help = ['gia']
handler.tags = ['info']
handler.command = ['gia'] // creado por 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨

export default handler