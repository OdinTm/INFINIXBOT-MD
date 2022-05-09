import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*🔹Ingresa un enlace que deseas acortar, ejemplo #acortar www.google.com*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*🔹Su link ha sido acortado con éxito ☑*\n\n*🔹Enlace anterior:*\n${text}\n*🔹Link acortado:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['ᴀᴄᴏʀᴛᴀʀ <ʟɪɴᴋ>']
handler.tags = ['herramientas']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
