let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, 'Tremendo lolicon el master 🥶 ', author, global.API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['🔹Lolice', `#lolice`]], m)
}

handler.help = ['ʟᴏʟɪᴄᴇ']
handler.tags = ['img edit']         

handler.command = /^(lolice)$/i

export default handler