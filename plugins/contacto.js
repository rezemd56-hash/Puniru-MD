// plugins/owner.js

let handler = async (m, { conn }) => {
  let nombre = '𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨'
  let numero = '6287774831869'

  let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL;type=CELL;type=VOICE;waid=${numero}:${numero}
END:VCARD`

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: nombre,
      contacts: [{ vcard }]
    }
  }, { quoted: m })
}

// 👇 ESTO HACE QUE EL COMANDO SÍ EXISTA
handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'dueño', 'creador']

export default handler