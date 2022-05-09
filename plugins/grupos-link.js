import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw '🔹Los participantes no están definidos❗ '
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '🔹No estoy en ese grupo❗'
    if (!me.admin) throw '🔹Dame administracion para cumplir tu orden'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.admin = true
handler.help = ['ɪɴᴠɪᴛᴀᴄɪᴏɴ ʟɪɴᴋ']
handler.tags = ['grupos']
handler.command = ['invitacion', 'invitación']
handler.botAdmin = true

export default handler