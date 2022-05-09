import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Ejemplo de busqueda: ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let { url, width, height } = pickRandom(res) || {}
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 ɪᴍᴀɢᴇɴ ɢᴏᴏɢʟᴇ」 ──*

El resultado de *${text}*

${author}
`.trim(), m)
}
handler.help = ['ɢɪᴍᴀɢᴇ <ᴛᴇxᴛᴏ>', 'image']
handler.tags = ['descargas']
handler.command = /^(gimage|image)$/i
handler.limit   = true
export default handler

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  