
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/me vengo.mp3'
conn.sendFile(m.chat, vn, 'me vengo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /oh me vengo|me vengoooo|ooo me vengoo/i
handler.command = new RegExp
handler.help = ['ᴏʜ ᴍᴇ ᴠᴇɴɢᴏ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
