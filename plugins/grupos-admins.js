let handler = async (m, { conn, participants, args }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
   
    let text = args.join` `
    let oi = `*πππππΌππ:* ${text}`
        let textt = `
*βγβε½‘[ΙͺΙ΄α΄ α΄α΄α΄Ι΄α΄α΄ α΄α΄α΄ΙͺΙ΄Ιͺκ±α΄Κα΄α΄α΄Κα΄κ±]ε½‘βγβ*

${oi}

${listAdmin}


`.trim()
       const ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
      
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', textt, m, false, { contextInfo: { mentionedJid } })
    }

handler.help = ['α΄α΄α΄ΙͺΙ΄κ±']
handler.tags = ['grupos']

handler.command = /^(admins|@admins)$/i

handler.group = true

export default handler
