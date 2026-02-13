// plugins/owner.js

let handler = async (m, { conn }) => {
  let nombre = '𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙤𓅨'
  let numero = '85295456491'

  let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL;type=CELL;type=VOICE;waid=${numero}:${numero}
END:VCARD`.trim()

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: nombre,
      contacts: [{ vcard }]
    }
  }, { quoted: m })
}

// 👇 hace que el comando exista
handler.help = ['owner2']
handler.tags = ['info']
handler.command = ['owner2', 'cuervo', 'novio']

export default handler