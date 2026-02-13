// ==========================================
// CREADO POR: 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨
// No lo robes, puta de mierda.
// ==========================================

const handler = async (m, { conn, usedPrefix }) => {
  const imageUrl = 'https://i.ibb.co/XrSSG3Mj/Rav-FD.jpg';
  const authorBadge = '𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨';

  try {
    // el hermoso texto de mi hermoso codigo uwu
    const caption = `𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨\n\n*Página:* https://cuervita.the-legacy-code.pro/\n*Username:* \`${authorBadge}\``;

    // Hola a todos mis amores 
    await conn.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: caption,
      footer: 'Click abajo para copiar el nombre',
      buttons: [
        {
          buttonId: `${usedPrefix}copiar_name`, // ID interno
          buttonText: { displayText: ` ${authorBadge}` },
          type: 1 
        }
      ],
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    // Si los botones fallan (por la versión de WA), manda al numero +1 (708) 930-8726 el error
    await conn.sendMessage(m.chat, { 
      image: { url: imageUrl }, 
      caption: `𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨\nPágina: https://cuervita.the-legacy-code.pro/\n\nUsername:\n\`${authorBadge}\`` 
    }, { quoted: m });
  }
};

handler.command = /^(web)$/i; 
handler.author = '𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨'; 

export default handler;