 import PhoneNumber from 'awesome-phonenumber'
 import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who)
  } catch (e) {

  } finally {
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who) 
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
╭☆━「✦」━☆  
│➺Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
│➺Numero: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│➺Link: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
│➺XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Listo para *${usedPrefix}levelup*` : `${math} XP restante para subir de nivel`}]
│➺Level: ${level}
│➺Role: *${role}*
│➺Limite: ${limit}
│➺Registro: ${registered ? 'Sí (' + new Date(regTime) + ')': 'No'}
│➺Premium: ${prem ? 'Sí' : 'No'}${lastclaim > 0 ? '\nÚltimo Reclamo: ' + new Date(lastclaim) : ''}
╰☆━「✦」━☆
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['#ᴘᴇʀꜰɪʟ']
handler.tags = ['exp y limites']
handler.command = /^profile|perfil$/i

export default handler
