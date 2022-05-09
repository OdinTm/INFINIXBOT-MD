import { decryptGroupSignalProto } from "@adiwajshing/baileys"

let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    dog: text || 'Soy estupido'
  }), 'iss.png', 'Muy estúpido 😂', m)
}

handler.help = ['ᴇꜱᴛᴜᴘɪᴅᴏ']
handler.tags = ['img edit']

handler.command = ['estupido']

export default handler