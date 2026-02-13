import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let mentionedJid = m.mentionedJid
  let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
  let totalreg = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length

  let txt = `
╔════════════════════════════╗
║        P U N I R U - M D    ║
║      S I S T E M A  M E N U ║
╚════════════════════════════╝

╭────────────────────────────╮
│ Usuario: @${userId.split('@')[0]}
│ Bot: Puniru-Md
│ Estado: ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
│ Usuarios: ${totalreg.toLocaleString()}
│ Version: v${vs}
│ Comandos: ${totalCommands}
│ Libreria: ${libreria}
╰────────────────────────────╯

╔════════════════════════════╗
║        ECONOMIA            ║
╚════════════════════════════╝
[ #work ] [ #trabajar ]
[ #slut ] [ #prostituirse ]
[ #coinflip ] [ #cf ]
[ #crime ]
[ #casino ] [ #slot ]
[ #balance ] [ #bank ]
[ #deposit ] [ #withdraw ]
[ #daily ] [ #weekly ] [ #monthly ]
[ #rob ] [ #steal ]
[ #aventura ] [ #cazar ] [ #fish ]

╔════════════════════════════╗
║        DESCARGAS           ║
╚════════════════════════════╝
[ #tiktok ]
[ #mediafire ]
[ #mega ]
[ #play ] [ #ytmp3 ] [ #ytmp4 ]
[ #facebook ]
[ #instagram ]
[ #apk ] [ #modapk ]
[ #gitclone ]
[ #png ]

╔════════════════════════════╗
║        GACHA / WAIFUS      ║
╚════════════════════════════╝
[ #rollwaifu ]
[ #claim ]
[ #harem ]
[ #waifus ]
[ #sell ] [ #buycharacter ]
[ #trade ]
[ #vote ]
[ #waifusboard ]

╔════════════════════════════╗
║        INTERACCION         ║
╚════════════════════════════╝
[ #hug ]
[ #kiss ]
[ #pat ]
[ #cuddle ]
[ #seduce ]
[ #slap ]
[ #love ]
[ #ppcouple ]

╔════════════════════════════╗
║        UTILIDADES          ║
╚════════════════════════════╝
[ #menu ] [ #help ]
[ #ping ]
[ #sticker ]
[ #toimg ]
[ #translate ]
[ #ia ] [ #iavoz ]
[ #wiki ]
[ #dalle ]
[ #slime ]

╔════════════════════════════╗
║        ADMIN GRUPO         ║
╚════════════════════════════╝
[ #tagall ]
[ #welcome on/off ]
[ #antilink on/off ]
[ #promote ] [ #demote ]
[ #kick ] [ #add ]
[ #admins ]
[ #link ]
[ #infogrupo ]
[ #grupo ]
[ #canal ]
[ #𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨/#cuervitainfo ]
[ #web ]
[ #gia ]

╔════════════════════════════╗
║        NSFW                ║
╚════════════════════════════╝
[ *#danbooru • #dbooru* + Tags ]
[ *#gelbooru • #gbooru* + Tags ]
[ *#rule34 • #r34* + Tags ]
[ *#xvideos •#xvideosdl* + Link ]
[ *#xnxx •#xnxxdl* + Link ]
[ *#anal* + <mencion> ]
[ *#waifu* ]
[ *#bath* + <mencion> ]
[ *#blowjob • #mamada • #bj* + <mencion> ]
[ *#boobjob* + <mencion> ]
[ *#cum* + <mencion> ]
[ *#fap* + <mencion> ]
[ *#ppcouple • #ppcp* ]
[ *#footjob* + <mencion> ]
[ *#fuck • #coger • #fuck2* + <mencion> ]
[ *#cafe • #coffe* ]
[ *#violar • #perra* + <mencion> ]
[ *#grabboobs* + <mencion> ]
[ *#grop* + <mencion> ]
[ *#lickpussy* + <mencion> ]
[ *#sixnine • #69* + <mencion> ]
[ *#spank • #nalgada* + <mencion> ]
[ *#suckboobs* + <mencion> ]
[ *#undress • #encuerar* + <mencion> ]
[ *#yuri • #tijeras* + <mencion> ]

╔════════════════════════════╗
║        OWNER               ║
╚════════════════════════════╝
[ #detectar ]
[ #getplugin ]
[ #saveplugin ]
[ => owner ]
[ autoadmin ]
[ #owner/#owners2/#owner3 ]
──────────────────────────────
Puniru-Md • Sistema activo
Creado por 𓅨𝘾𝙪𝙚𝙧𝙫𝙞𝙩𝙖𓅨
`.trim()

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [userId],
      externalAdReply: {
        title: 'Puniru-Md • Bot MD',
        body: textbot,
        mediaType: 1,
        mediaUrl: redes,
        sourceUrl: redes,
        thumbnail: await (await fetch(banner)).buffer(),
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler