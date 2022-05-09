
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '🔹Etiqueta un usuario ejemplo: #paylimit 10 @usuario'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '🔹Ingrese la cantidad de Límite a dar, ejemplo: #paylimit 10 @usuario'
    if (isNaN(txt)) throw '🔹sólo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw '🔹Mínimo 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw '🔹Límite insuficiente para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limite) + (${-pjk} Limite (Impuestos 2%)) = ( ${-limit} Limite)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['ᴘᴀʏʟɪᴍɪᴛ <cantidad> @user']
handler.tags = ['exp y limites']
handler.command = /^paylimit$/
handler.rowner = false

export default handler
