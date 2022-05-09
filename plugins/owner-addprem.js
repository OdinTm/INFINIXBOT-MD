let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `🔹Etiqueta a la persona!`
    if (global.prems.includes(who.split`@`[0])) throw '🔹El ya es premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} 🔹Ahora es premium, puede usar el bot ilmitadamente ‼`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem [@user]']
handler.tags = ['owner menu']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

export default handler
