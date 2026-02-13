let handler = async (m, { conn, usedPrefix }) => {
  let texto = `✨ Mi canal de Puniru, sigue el link para estar al día y seguir trabajando en ella:\n\nhttps://whatsapp.com/channel/0029Vb6iPeUD8SE7OCpohu25`;

  await conn.reply(m.chat, texto, m);
}

// Esto hace que sea compatible con todos los prefijos, incluso ¥
handler.command = /^(canal)$/i; 
handler.register = true; // Asegura que no salga "comando no existe"

export default handler;