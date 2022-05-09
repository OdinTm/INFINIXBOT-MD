import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `‼ Responda el video que desea convertir a *NOTA DE VOZ* con el comando *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'Fallo al descargar el archivo ❌'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '‼ Fallo al convertir el video/nota a audio, intenta de nuevo ❌'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['#ᴛᴏᴠɴ (ʀᴇꜱᴘᴏɴᴅᴇ)']
handler.tags = ['audio mod']

handler.command = /^to(vn|(ptt)?)$/i

export default handler