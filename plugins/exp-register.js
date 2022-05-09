
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `🔹Usted ya está registrado \n¿Quieres volver a registrarte? escribe ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `🔹Orden incorrecto\n*${usedPrefix}registrar nombre|edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🔹El nombre no puede estar vacío (alfanumérico)'
  if (!age) throw '🔹La edad no puede estar vacía (Número)'
  age = parseInt(age)
  if (age > 120) throw '🔹Edad demasiado vieja 😂, vaya al acilo!'
  if (age < 5) throw '🔹Edad muy corta, minimo de edad para usar el bot +15.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
🔹𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗼 𝗲𝘅𝗶𝘁𝗼𝘀𝗼❗

╭─「🔹𝗧𝘂 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 」
│🔹 Nombre: ${name}
│🔹Edad: ${age} años
│🔹NS: ${sn}
╰────
*si falta su sn (numero de serie), escriba ${usedPrefix}sn
`.trim())
}
handler.help = ['ʀᴇɢ <ɴᴏᴍʙʀᴇ>.<ᴇᴅᴀᴅ>'], 'ʀᴇɢɪꜱᴛᴇʀ <ɴᴏᴍʙʀᴇ>.<ᴇᴅᴀᴅ>'
handler.tags = ['exp y limites']

handler.command = /^(registrar|reg(ister)?)$/i

export default handler
