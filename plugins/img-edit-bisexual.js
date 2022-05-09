//* adaptaciòn by odin el fucker kkkk

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Imagen no soportada'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `El peso ${mime} no soportado`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.ml/canvas/bisexual?avatar=${url}`
  let stiker = await sticker(null, wasted, global.packname)
  conn.sendFile(m.chat, stiker, MessageType.sticker, {
    quoted: m 
  })                    
 } catch (e) {
   m.reply('🔹Conversión fallida❌, recuerde responder a una imagen‼')
  }
}
handler.help = ['ʙɪɢᴇɴᴇʀᴏ <etiqueta imagen>']
handler.tags = ['img edit']
handler.command = /^bigenero$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler


