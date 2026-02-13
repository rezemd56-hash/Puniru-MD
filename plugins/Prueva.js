import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Verificamos que el usuario haya escrito una pregunta
  if (!text) throw `*¡Hola! Por favor ingresa una pregunta.*\n\n*Ejemplo:*\n${usedPrefix + command} ¿Quién es el mejor programador?`

  try {
    // Mostramos un estado de "escribiendo" para que sea más natural
    await conn.sendPresenceUpdate('composing', m.chat)

    // Hacemos la petición a la API
    const response = await fetch(`https://apikey.the-legacy-code.pro/ai/chatgpt4o?text=${encodeURIComponent(text)}`)
    
    if (!response.ok) throw 'Error al conectar con la API'
    
    const json = await response.json()

    // Según el JSON que me mostraste, la respuesta está en: json.result.data
    if (json.status && json.result && json.result.data) {
      const reply = json.result.data
      await m.reply(reply)
    } else {
      throw 'No se pudo obtener una respuesta válida.'
    }

  } catch (error) {
    console.error(error)
    m.reply('*Ocurrió un error al procesar tu solicitud. Inténtalo más tarde.*')
  }
}

handler.help = ['gpt4', 'ia']
handler.tags = ['ai']
handler.command = /^(gpt4|ia|chatgpt|wolf)$/i // Comandos que activarán la función

export default handler
