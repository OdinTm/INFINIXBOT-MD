let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '𝙇𝙞𝙘𝙚𝙣𝙘𝙞𝙖 𝙥𝙖𝙧𝙖 𝙖𝙣𝙙𝙖𝙧 𝙗𝙞𝙚𝙣 𝙝𝙤𝙩 🥵', m)
}

handler.help = ['ʜᴏʀɴʏᴄᴀʀᴅ']
handler.tags = ['img edit']

handler.command = /^(horny(card|license))$/i

export default handler