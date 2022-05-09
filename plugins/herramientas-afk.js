let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)}🔹𝘼𝙝𝙤𝙧𝙖 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝘼𝙁𝙆 ${text ? ': ' + text : ''}
`)
}
handler.help = ['ᴀꜰᴋ [ᴍᴏᴛɪᴠᴏ]']
handler.tags = ['herramientas']
handler.command = /^afk$/i

export default handler
