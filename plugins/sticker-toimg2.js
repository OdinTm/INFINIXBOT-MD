import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `🔹Para convertir un sticker a imagen usa como ejemplo: *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*DONE*', m)
}
handler.help = ['ᴛᴏɪᴍɢ (ʀᴇᴘʟʏ)']
handler.tags = ['sticker menu']
handler.command = ['toimg']

export default handler