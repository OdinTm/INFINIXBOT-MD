import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🔹𝘗𝘢𝘳𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯𝘢 𝘤𝘢𝘯𝘤𝘪𝘰́𝘯 𝘰 𝘷𝘪𝘥𝘦𝘰 𝘶𝘴𝘢 𝘤𝘰𝘮𝘰 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: ${usedPrefix}${command} i'm happy faraon ☑`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '🔹Lo sentimos, Vídeo/Audio no encontrado❌, intente con otro nombre ☑'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *Titulo:* ${title}
🔗 *Url:* ${url}
🖹 *Descripción:* ${description}
⏲️ *Publicado en:* ${publishedTime}
⌚ *Duración:* ${durationH}
👁️ *Vistas:* ${viewH}
  `.trim(), author, thumbnail, url, '📺Miralo en YouTube!', null, null, [
    ['Audio 🎧', `${usedPrefix}yta ${url} yes`],
    ['Video 🎥', `${usedPrefix}ytv ${url} yes`],
    ['Buscador de Youtube🔎', `${usedPrefix}buscaryt ${url}`]
  ], m)
}
handler.help = ['ᴘʟᴀʏ <ᴛɪᴛᴜʟᴏ>','ᴘʟᴀʏ2']
handler.tags = ['descargas']
handler.command = /^play|play2?$/i

handler.exp = 0

export default handler

