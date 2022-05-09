let handler = async (m, { conn, text }) => {
    let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛᴏ>|<ᴛᴇxᴛᴏ>', 'ꜱᴘᴏɪʟᴇʀ <ᴛᴇxᴛᴏ>|<ᴛᴇxᴛᴏ> ']
handler.tags = ['herramientas']
handler.command = /^(spoiler|hidetext|readmore|selengkapnya)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001) 
