let handler = async (m, { conn }) => {
    if (!m.quoted) throw '🔹¿Dónde está el mensaje?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'eso no es un mensaje viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '🔹¡No puedo abrir mensajes!'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['herramientas']
handler.command = /^readviewonce/i

export default handler