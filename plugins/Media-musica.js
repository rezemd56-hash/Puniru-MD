import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  // 1. Verificamos que haya texto
  if (!text) throw `*¡Falta el enlace de YouTube!*\n\n*Ejemplo:*\n${usedPrefix + command} https://www.youtube.com/watch?v=Ejemplo`

  // 2. Validación de URL de YouTube
  const isYoutube = text.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}/)
  
  if (!isYoutube) {
    return m.reply('*⚠️ El enlace no es válido.* Asegúrate de que sea un link de YouTube (ejemplo: youtube.com o youtu.be)')
  }

  try {
    await m.reply('*⌛ Procesando audio... por favor espera.*')
    
    const res = await fetch(`https://api.the-legacy-code.pro/download/ytmp3?url=${encodeURIComponent(text)}`)
    const json = await res.json()

    if (json.status && json.result) {
      // Enviamos el audio
      await conn.sendMessage(m.chat, { 
        audio: { url: json.result }, 
        mimetype: 'audio/mpeg', 
        fileName: `music.mp3` 
      }, { quoted: m })
      
    } else {
      throw 'Error en la respuesta de la API'
    }

  } catch (error) {
    console.error(error)
    m.reply('*❌ Error:* No se pudo obtener el audio. La API podría estar caída o el video no estar disponible.')
  }
}

handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.command = /^(ytmp3|audio|musica)$/i

export default handler
