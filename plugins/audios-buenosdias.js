

import util from 'util'
import path from 'path'


let handler = async (m, { conn }) => {
let vn = './media/buenos dias.mp3'
conn.sendFile(m.chat, vn, 'buenos dias.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /buenos dias|buen dia|buenos/i
handler.command = new RegExp
handler.help = ['ʙᴜᴇɴᴏꜱ ᴅɪᴀꜱ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100

export default handler
