let handler = async (m, { conn }) => {
  if (!m.isGroup) return

  let metadata = await conn.groupMetadata(m.chat)
  let mentions = metadata.participants.map(p => p.id)

  let texto = `❝ 𝙃𝙤𝙡𝙖 𝙨𝙤𝙮 𝙋𝙪𝙣𝙞𝙧𝙪-𝙗𝙤𝙩 ❞

✿ 𝙇𝙖 𝙥𝙚𝙦𝙪𝙚𝙣̃𝙖 𝙎𝙡𝙞𝙢𝙚 𝙙𝙚 𝘼𝙣𝙩𝙝𝙤 ✿

❀༺ 𝙐𝙣 𝙜𝙪𝙨𝙩𝙤 𝙖 𝙩𝙤𝙙𝙤𝙨, 𝙚𝙨𝙩𝙤𝙮 𝙥𝙖𝙧𝙖 𝙖𝙮𝙪𝙙𝙖𝙧𝙡𝙚𝙨 ༻❀`

  await conn.sendMessage(m.chat, {
    image: { url: 'https://i.ibb.co/GvxV6BSZ/imagen.jpg' },
    caption: texto,
    mentions
  })
}

handler.command = ['grupo']
handler.group = true
handler.tags = ['grupo']
handler.help = ['grupo']

export default handler