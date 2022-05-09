import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `🔹Para buscar las letras de tu canción escribe ${usedPrefix}${command} *nombre de la canción*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
🔹Lyrics *${result.title}*
🔹Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['ʟᴇᴛʀᴀꜱ <cancion>']
handler.tags = ['herramientas']
handler.command = /letras/i

export default handler