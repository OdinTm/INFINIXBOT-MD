import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'  
	let url = pack[Math.floor(Math.random() * pack.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', author, url, [['SIGUIENTE ➡', `#samh`]], m)}

handler.command = /^(samh)$/i

handler.help = ['ꜱᴀᴍʜ']
handler.tags = ['menu 18'] 

handler.limit = 2
global.pack = [
  "https://i.ibb.co/zGygftm/1.jpg",
  "https://i.ibb.co/mzhz0qC/2.jpg" ,
  "https://i.ibb.co/60xLFkf/3.jpg" ,
  "https://i.ibb.co/kXV8yXp/3.webp" ,
  "https://i.ibb.co/QCC1xpV/4.jpg" ,
  "https://i.ibb.co/YTDHqch/5.jpg" ,
  "https://i.ibb.co/3437py4/6.jpg" ,
  "https://i.ibb.co/x65Lkx8/7.jpg" ,
  "https://i.ibb.co/J57CTkn/8.jpg" ,
  "https://i.ibb.co/qrnsdZb/9.jpg" ,
  "https://i.ibb.co/DzBdSxh/10.jpg", 
  "https://i.ibb.co/MPSLHND/11.jpg" ,  
  "https://i.ibb.co/4M3vqwj/12.jpg" ,
  "https://i.ibb.co/BVKZ17c/13.jpg"
]

export default handler