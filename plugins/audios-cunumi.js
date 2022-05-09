
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/cunumi.mp3'
conn.sendFile(m.chat, vn, 'cunumi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /cunumi|una cunumi/i
handler.command = new RegExp
handler.help = ['ᴄᴜɴᴜᴍɪ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
