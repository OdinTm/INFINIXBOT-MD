import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `🔹_Enviar mensaje de difusion a ${groups.length} grupos_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「🔹 Mensaje de difusion🔹」\n' + randomID(32)), true).catch(_ => _)
  m.reply('🔹Mensaje enviado correctamente')
}
handler.help = ['ʙʀᴏᴀᴅᴄᴀꜱᴛɢʀᴏᴜᴘ <ᴍᴇɴꜱᴀᴊᴇ>', 'ʙᴄɢᴄ']
handler.tags = ['owner menu']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
