import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Foto no soportada'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `El peso ${mime} de la foto no es soportada`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, global.packname,)
  conn.sendFile(m.chat, stiker, MessageType.sticker,  m)
 } catch (e) {
   m.reply('🔹Conversión fallida❌, recuerde responder a una imagen‼')
  }
}
handler.help = ['ᴡᴀɴᴛᴇᴅ']
handler.tags = ['img edit']
handler.command = /^wanted$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler