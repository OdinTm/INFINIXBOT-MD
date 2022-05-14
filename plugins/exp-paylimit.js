
const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('🔹Estas haciendo una transferencia')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `🔹 Para transferir exp o limites escribe: 
*${usedPrefix + command}*  [tipo] [cantidad] [@user]
📌 Ejemplo : ${usedPrefix + command} exp 10 @USER
📍 Lista de transferencias disponibles: 
┌──────────────
▢ *limit* = limites
▢ *exp* = experiencia de uso 
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('🔹Etiqueta al usuario')
    if (!(who in global.db.data.users)) return m.reply(`🔹Lo sentimos, el usuario ${who} no esta en el bot.`)
    if (user[type] * 1 < count) return m.reply(`🔹 Tu cantidad de *${type}* no es suficiente para transferir `)
    let confirm = `
🔹¿Está seguro de que desea transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 
Tienes  *60* s
`.trim()
    let c = '@INFINIXBOT2022'
    conn.sendButton(m.chat, confirm, c, null, [['SI☑'], ['NO❌']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Se acabó el tiempo ❌'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Cancelado')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`🔹Transferencia exitosa de \n\n*${count}* *${type}*  a @${(to || '').replace(/@s\.whatsapp\.net/g, '')} ✅ `, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Lo sentimos, ocurrio un error al transferir *${count}* ${type} para *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}* ❌`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['ᴛʀᴀɴꜱꜰᴇʀɪʀ <ʟɪᴍɪᴛ> <ᴄᴀɴᴛɪᴅᴀᴅ> <@ᴜꜱᴇʀ>']
handler.tags = ['exp y limites']
handler.command = ['transferir', 'transfer', 'darlimit'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}