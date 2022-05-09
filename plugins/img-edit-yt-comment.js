let handler = async (m, { conn, text }) => {
  if (!text) throw 'Escribe un comentario kk'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '🔹Aquí está tu comentario ☑', m)
}

handler.help = ['ʏᴛᴄᴏᴍᴍᴇɴᴛ <ᴄᴏᴍᴍᴇɴᴛ>']
handler.tags = ['img edit']

handler.command = /^(ytcomment)$/i
handler.limit = true
export default handler
