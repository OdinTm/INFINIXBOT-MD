
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/a.mp3'
conn.sendFile(m.chat, vn, 'a.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.help = ['ᴀ']
handler.tags = ['audios']
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/

export default handler
