case 'ytdl': case 'mp3': case 'yta': case 'ytaudio': case 'play': case 'ytmp3': {
    if (!isGroup) return
    const text = args.join(" ")
    if (!text) return reply(`ꕤ Por favor, ingresa el nombre o link de YouTube.`)
    
    const tempDir = join(process.cwd(), 'tmp')
    if (!existsSync(tempDir)) mkdirSync(tempDir, { recursive: true })
    const baseId = Date.now()
    const outputFile = join(tempDir, `${baseId}_out.mp3`)

    try {
        const search = await yts({ query: text, pages: 1 })
        const video = search.videos[0]
        if (!video) return reply(`✰ No se encontraron resultados.`)
        
        const safeTitle = cleanFileName(video.title)
        let infoText = `*✧ ‧₊˚* \`YOUTUBE AUDIO\` *୧ֹ˖ ⑅ ࣪⊹*\n`
        infoText += `⊹₊ ˚‧︵‿₊୨୧₊‿︵‧ ˚ ₊⊹\n`
        infoText += `› ✰ *Título:* ${video.title}\n`
        infoText += `› ✿ *Canal:* ${video.author.name}\n`
        infoText += `› ✦ *Duración:* ${video.timestamp}\n`
        infoText += `› ꕤ *Vistas:* ${formatViews(video.views)}\n`
        infoText += `› ❖ *Link:* _${video.url}_`
        
        const sendInfo = conn.sendMessage(from, { image: { url: video.thumbnail }, caption: infoText }, { quoted: msg })
        
        const processAudio = (async () => {
            let result = await raceWithFallback(video.url, true)
            if (!result || !result.download) throw new Error()

            const buffer = await getBufferFromUrl(result.download)
            if (!buffer || buffer.length === 0 || buffer.error === 'too_large') throw new Error()

            const inputFile = join(tempDir, `${baseId}_in`)
            writeFileSync(inputFile, buffer)

            await execPromise(`ffmpeg -i "${inputFile}" -vn -ab 128k -ar 44100 -ac 2 -preset ultrafast -f mp3 "${outputFile}" -y`)
            
            await conn.sendMessage(from, { 
                audio: readFileSync(outputFile), 
                mimetype: 'audio/mpeg',
                fileName: `${safeTitle}.mp3`,
                ptt: false
            }, { quoted: msg })

            if (existsSync(inputFile)) unlinkSync(inputFile)
        })()

        await Promise.all([sendInfo, processAudio])
    } catch (e) {
        reply(`⚠︎ Error al procesar el audio.`)
    } finally {
        if (existsSync(outputFile)) unlinkSync(outputFile)
    }
}
break