

import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*' 
	let url = pack1[Math.floor(Math.random() * pack1.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', author, url, [['SIGUIENTE ➡', `#pack`]], m)}

handler.command = /^(pack)$/i
handler.tags = ['menu 18']
handler.help = ['ᴘᴀᴄᴋ']
handler.limit = 5

handler.limit = true
global.pack1 = [
  "https://i.postimg.cc/htwsYbnb/1.jpg",
  "https://i.postimg.cc/cL5kSGR3/2.jpg",
  "https://i.postimg.cc/QM94NYmy/3.jpg",
  "https://i.postimg.cc/k4WTKVkN/5.webp",
  "https://i.postimg.cc/Bvrhj5wQ/6.webp",
  "https://i.postimg.cc/Bvrhj5wQ/6.webp",
   "https://i.postimg.cc/zvV34W8K/10.jpg",
   "https://i.postimg.cc/J0vt8nzg/11.jpg",
   "https://i.postimg.cc/NjT2g1Tx/12.jpg",
   "https://i.postimg.cc/mryc9Bmz/13.jpg",
   "https://i.postimg.cc/vHC6FP1B/14.jpg",  
  "https://i.postimg.cc/HLgcjV91/15.jpg",
  "https://i.postimg.cc/cH1vM2zD/16.jpg",
  "https://i.postimg.cc/tCnY5hrH/17.jpg",
  "https://i.postimg.cc/CxjdywTP/18.jpg",
  "https://i.postimg.cc/7ZvbQfcJ/19.jpg",
  "https://i.postimg.cc/MGqHqgzW/20.jpg",
  "https://i.postimg.cc/76LLT7Cd/21.jpg",
  "https://i.postimg.cc/MG5TTtG1/22.jpg",
  "https://i.postimg.cc/90RFLhYB/23.jpg",
  "https://i.postimg.cc/xjhdcX9p/24.jpg",
  "https://i.postimg.cc/0QHyGQDQ/25.jpg",
  "https://i.postimg.cc/fRhTf1tx/26.jpg",
  "https://i.postimg.cc/9F9QTcMm/27.jpg",
  "https://i.postimg.cc/zvsDMcdY/28.jpg",
  "https://i.postimg.cc/zG5HGyjZ/29.jpg",
  "https://i.postimg.cc/vDwMX6BQ/30.jpg",
  "https://i.postimg.cc/J0kMbQR6/31.jpg",
  "https://i.postimg.cc/59hFD7Qt/32.jpg",
  "https://i.postimg.cc/mZzHXfDq/33.jpg",
  "https://i.postimg.cc/rpwd573f/34.jpg",
  "https://i.postimg.cc/W1nFFsWD/35.jpg",
  "https://i.postimg.cc/bvVZg3jp/36.jpg",
  "https://i.postimg.cc/3RydcmKp/37.jpg",
  "https://i.postimg.cc/wvS78Mvr/38.jpg",
  "https://i.postimg.cc/KcM17Pph/39.jpg",
  "https://i.postimg.cc/kGKDnCRg/40.jpg",
  "https://i.postimg.cc/pLqrVqrz/41.jpg",
  "https://i.postimg.cc/VLPdKJ2r/42.jpg",
  "https://i.postimg.cc/Jz1tW9rR/43.jpg",
  "https://i.postimg.cc/YS09vYLV/44.jpg",
  "https://i.postimg.cc/6QPQnqdQ/45.jpg",
  "https://i.postimg.cc/gJ62DpDH/46.jpg",
  "https://i.postimg.cc/hvWPZYZW/47.jpg",
  "https://i.postimg.cc/d32Qb9g7/48.jpg",
  "https://i.postimg.cc/CMkKnFdF/49.jpg",
  "https://i.postimg.cc/qMrv89C2/50.jpg",
  "https://i.postimg.cc/fTvT5Bxp/51.jpg",
  "https://i.postimg.cc/85yjywQT/8.jpg",
  "https://i.postimg.cc/05BzDt0f/9.jpg"

]

export default handler