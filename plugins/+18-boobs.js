


import axios from "axios"
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'    
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵 ', author, json.url, [['SIGUIENTE ➡', `${usedPrefix}tetas`]], m)}

handler.help = ['tetas']
handler.tags = ['menu 18']

handler.command = /^(tetas)$/i
handler.limit   = 5
export default handler 