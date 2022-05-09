import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
            await conn.groupParticipantsUpdate(m.chat, [user], 'degradar')
        
    m.reply('🔹𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗱𝗲𝗴𝗿𝗮𝗱𝗮𝗱𝗼 𝗮 𝗺𝗶𝗲𝗺𝗯𝗿𝗼 𝗰𝗼𝗺𝘂́𝗻 𝗰𝗼𝗻 𝗲́𝘅𝗶𝘁𝗼 ☑')

}
handler.help = ['ᴅᴇɢʀᴀᴅᴀʀ @usuario']
handler.tags = ['owner menu', 'grupos']
handler.command = /^(degradar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler