let handler = async (m, { conn, args }) => {
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('🔹Descripcion del grupo cambiada correctamente ☑')
}

handler.help = ['ᴅᴇꜱᴄʀɪᴘᴄɪᴏɴ <ᴛᴇxᴛᴏ>']
handler.tags = ['grupos']
handler.command = /^descripcion$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler