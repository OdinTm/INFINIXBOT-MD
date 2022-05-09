let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('🔹Ban retirado, puedes seguir usando el bot ☑')
}
handler.help = ['ᴜɴʙᴀɴᴄʜᴀᴛ']
handler.tags = ['owner menu']
handler.command = /^unbanchat$/i
handler.owner = true

export default handler