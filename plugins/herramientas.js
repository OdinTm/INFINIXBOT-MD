
import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\🔹Aqui tienes tu QR', m)

handler.help = ['Qʀ <ᴛᴇxᴛᴏ>']
handler.tags = ['herramientas']
handler.command = /^qr(code)?$/i


export default handler