import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🔹Ingresa que deseas buscar, ejemplo: ${usedPrefix + command} caballo blanco`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Resultados para:*
${text}
`.trim(), m)
}
handler.help = ['ᴘɪɴᴛᴇʀᴇꜱᴛ <ᴛᴇxᴛᴏ>']
handler.tags = ['descargas']
handler.command = /^(pinterest)$/i

export default handler