let handler = async (m, { isAdmin, isOwner, conn, command }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, ` 🔹Link del grupo reestablecido correctamente, se envio a su chat privado por seguridad ☑`, m)
  await delay(1000)
  let linknya = await conn.groupInviteCode(m.chat)
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + linknya, m)
}
handler.help = ['ʀᴇᴇꜱᴛᴀʙʟᴇᴄᴇʀ']
handler.tags = ['grupos']
handler.command = /reestablecer/i

handler.group = true
handler.botAdmin = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))