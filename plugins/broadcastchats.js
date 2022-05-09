import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `🔹_Enviando mensaje de difusion a ${chats.length} chats_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 ' + author + '🔹 Mensaje de difusion para todos 」\n' + randomID(32)), true).catch(_ => _)
  m.reply('🔹Mensaje enviado correctamente :)')
}
handler.help = ['ʙʀᴏᴀᴅᴄᴀꜱᴛᴄʜᴀᴛꜱ <ᴍᴇɴꜱᴀᴊᴇ>', 'ʙᴄᴄʜᴀᴛꜱ']
handler.tags = ['owner menu']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)