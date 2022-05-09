import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '🔹Responde a un sticker!'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '🔹Responde al sticker!'
    let img = await m.quoted.download()
    if (!img) throw 'Responde al sticker'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw '🔹Conversion fallida, intenta de nuevo'
  }
}
handler.help = ['ᴡᴍ <ᴘᴀᴄᴋɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>']
handler.tags = ['sticker menu']
handler.command = /^wm$/i

export default handler
