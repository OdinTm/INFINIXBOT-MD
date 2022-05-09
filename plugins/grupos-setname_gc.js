let handler = async (m, { conn, args, usedPrefix, command }) => {

  await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('🔹El nombre del grupo se ha cambiado correctamente ☑')
}

handler.help = ['ᴛᴇᴍᴀ <ᴛᴇxᴛᴏ>']
handler.tags = ['grupos']
handler.command = /^tema$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler