import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let promoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
            await delay(1 * 1000)
        }
    m.reply('🔹𝗣𝗿𝗼𝗺𝗼𝘃𝗶𝗱𝗼 𝗮 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼 ☑')

}
handler.help = ['ᴘʀᴏᴍᴏver @usuario']
handler.tags = ['grupos', 'owner menu']
handler.command = /^(promover)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))