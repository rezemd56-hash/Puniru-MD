// plugins/owner.js

let handler = async (m, { conn }) => {
  let nombre = 'Y𝐮𝐒𝐬𝐡𝐚𝐧-𝐀𝐲𝐮𝐝𝐚𝐧𝐭𝐞'
  let numero = '584142424614'

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
handler.help = ['owner3']
handler.tags = ['info']
handler.command = ['owner3', 'yu', 'creador3']

export default handler