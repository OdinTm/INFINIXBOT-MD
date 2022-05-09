let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '🔹Imagen no encontrada❌'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `🔹Envia o responde una imagen con el comando: *${usedPrefix + command}*`
}
handler.help = ['fotogrupo <etiqueta foto>']
handler.tags = ['grupos']

handler.command = /^fotogrupo$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler