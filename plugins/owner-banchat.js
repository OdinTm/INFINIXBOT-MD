let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('🔹Chat baneado, ya no podras usar el bot!❌')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ʙᴀɴᴄʜᴀᴛ']
handler.tags = ['owner menu']
handler.command = /^banchat$/i

handler.owner = true

export default handler