import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `🔹Para buscar un wallpaper usa como ejemplo ${usedPrefix}${command} Minecraft`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `Resultado de *${text}*`, m)
}
handler.help = ['ᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇxᴛᴏ>',]
handler.tags = ['descargas']

handler.command = /^(wallpaper2?)$/i

export default handler