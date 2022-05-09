let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*🔹¡Formato incorrecto! Ejemplo :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['ɢʀᴜᴘᴏ *ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ*']
handler.tags = ['grupos']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true

export default handler
