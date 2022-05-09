

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '🔹Aqui tu wallpaper ', author, json, [['SIGUIENTE ➡', `${usedPrefix}gamer`]], m)
}

handler.tags = ['descargas']
handler.help = ['ɢᴀᴍᴇʀ']

handler.command = /^(gamer)$/i
handler.limit = true
export default handler
