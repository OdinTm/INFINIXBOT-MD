

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'         
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/nsfw/ahegao?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵 ', author, json, [['SIGUIENTE ➡', `${usedPrefix}ahegao`]], m)
}

handler.tags = ['menu 18']
handler.help = ['ᴀʜᴇɢᴀᴏ']

handler.command = /^(ahegaoᴀʜᴇɢᴀᴏ)$/i
handler.limit = 2
export default handler
