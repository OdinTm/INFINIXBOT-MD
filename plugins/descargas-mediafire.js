
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🔹Para descargar de MEDIAFIRE usa como ejemplo:  ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file *LIMITE DE 100MB SI SE PASA ESTE LIMITE NO SE DESCARGARA EL ARCHIVO*`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Nombre:* ${filename}
*Tamaño:* ${filesizeH}
*Extension:* ${ext}
*Fecha de subida:* ${aploud}
${author}
`.trim() 
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['ᴍᴇᴅɪᴀꜰɪʀᴇ <ʟɪɴᴋ>']
handler.tags = ['descargas']
handler.command = /^(mediafire|mf)$/i

handler.limit = 3

export default handler