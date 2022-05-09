import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply sticker or audio!'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw '¡Responder al sticker o audio!'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', 'ᴛᴏᴍᴀ ᴛᴜ ᴠɪᴅᴇᴏ ᴍᴀꜱᴛᴇʀ 🛡', null, m)
}
handler.help = ['ᴛᴏᴠɪᴅᴇᴏ (ʀᴇꜱᴘᴏɴᴅᴇ)']
handler.tags = ['herramientas']

handler.command = ['tovideo']

export default handler