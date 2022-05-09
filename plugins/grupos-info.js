let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antojar, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `

┏━━━━●*「 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 」*●━
│*ID:* 
│${groupMetadata.id}
│*Name:* 
│${groupMetadata.subject}
│*Description:* 
│${groupMetadata.desc?.toString() || 'unknown'}
│*Miembros Totales:*
│${participants.length} Miembros
│*Desarrolladores:* 
│@${owner.split('@')[0]}
│*Administradores:*
│  ${listAdmin}
│*Configuracion del grupo:*
│${welcome ? '✅' : '❌'} Bienvenida
│${antojar ? '✅' : '❌'} Antojar
│${antiLink ? '✅' : '❌'} Anti Link
│*Configuracion de mensajes:*
│Bienvenida: ${sWelcome}
│Despedida: ${sBye}
┗━━━━●●━━━━━━━━●●━━━━┛
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.admin = true
handler.help = ['ɪɴꜰᴏɢʀᴜᴘ']
handler.tags = ['grupos']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler