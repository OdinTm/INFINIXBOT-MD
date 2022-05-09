

import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './media/botate.mp3'
conn.sendFile(m.chat, vn, 'botate.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.help = ['ꜱᴇxᴏ']
handler.tags = ['audios']
handler.customPrefix =["no botate alv", "vete alv", "NO BOTATE ALV", "VETE ALV"]
handler.command = new RegExp

handler.fail = null
handler.exp = 100
export default handler
