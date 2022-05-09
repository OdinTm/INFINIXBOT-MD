
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/sexo2.mp3'
conn.sendFile(m.chat, vn, 'sexo2.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = ['secso', 'setso']
handler.command = new RegExp
handler.help = ['ꜱᴇᴄꜱᴏ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
