
import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `🔹Número de serie vacío\nPor favor, compruebe su número de serie..\nEscriba:\n${usedPrefix}sn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '🔹Número de serie incorrecto'
  user.registered = false
  m.reply(`🔹¡Unreg hecho con exito! ☑`)
}
handler.help = ['ᴜɴʀᴇɢ <ꜱɴ|ꜱᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ>']
handler.tags = ['exp y limites']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler

