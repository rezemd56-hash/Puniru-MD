let handler = async (m, { conn }) => {
  let q = m.quoted || m
  let mime = (q.msg || q).mimetype || ''

  if (!mime) {
    return conn.reply(m.chat, '❌ Responde a un *sticker* o *imagen* con ¥png', m)
  }

  if (!/webp|image/.test(mime)) {
    return conn.reply(m.chat, '❌ El archivo no es compatible', m)
  }

  let media = await q.download()

  // Convierte sticker o imagen a foto
  await conn.sendMessage(
    m.chat,
    { image: media, caption: '💜 Convertido a PNG' },
    { quoted: m }
  )
}

handler.help = ['png']
handler.tags = ['tools']
handler.command = ['png']

/* 👉 COMPATIBLE CON TODOS LOS PREFIJOS (¥ incluido) */
handler.prefix = /^[.!#$%^&*()+=\-[\]\\';,/{}|":<>?~`¥]/

export default handler