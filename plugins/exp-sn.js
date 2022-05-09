
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`
SN: ${sn}
`.trim())
}

handler.help = ['ꜱɴ <serial number>']
handler.tags = ['exp y limites']
handler.command = /^(sn)$/i
handler.register = true

export default handler
