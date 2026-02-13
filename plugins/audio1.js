import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  if (m.fromMe) return

  let text = m.text?.trim()
  if (text !== 'a' && text !== 'A') return

  // Descargar el audio
  let res = await fetch('https://files.clonix.cam/audios/c29e9f641fd6.mp3')
  let buffer = await res.arrayBuffer()
  let xd = 'https://files.cloudkuimages.guru/audios/3a78860dd8a8.mp3'

	
  // Enviar como MP3
  await conn.sendMessage(m.chat, {
    audio: { url: xd },
    mimetype: 'audio/mpeg',
    //ptt: true,
    fileName: 'audio.mp3' // 👈 se muestra como mp3
  }, { quoted: m })
}

// Sin prefijo, sin "comando no existe"
handler.customPrefix = /^(a|A)$/
handler.command = new RegExp

export default handler