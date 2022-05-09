let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['ᴀᴛᴛᴘ <escribe>']
handler.tags = ['sticker menu']

handler.command = /^attp$/i

export default handler