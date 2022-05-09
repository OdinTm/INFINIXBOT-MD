

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
      if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'    
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/nsfw/ass?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵 ', author, json, [['SIGUIENTE ➡', `${usedPrefix}ass`]], m)
}

handler.tags = ['menu 18']
handler.help = ['ᴀꜱꜱ']

handler.command = /^(ass)$/i
handler.limit = 3
export default handler
