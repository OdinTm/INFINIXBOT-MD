import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `‼ Responda el video/nota de voz que desea convertir a audio/mp3 con el comando*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'Fallo al descargar el archivo ❌ '
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '‼ Fallo al convertir el video/nota a audio, intenta de nuevo ❌ '
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['#ᴛᴏᴍᴘ3 (ʀᴇꜱᴘᴏɴᴅᴇ)']
handler.tags = ['audio mod']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler