let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].limit} 🔹Limites restantes(una noche con el creador y te da premium) ಥ_ಥ`)
}
handler.help = ['ʟɪᴍɪᴛ [@ᴜꜱᴜᴀʀɪᴏ] ']
handler.tags = ['exp y limites']
handler.command = /^(limit)$/i
export default handler