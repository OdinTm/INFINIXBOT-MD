
import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './media/sexo.mp3'
conn.sendFile(m.chat, vn, 'sexo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.help = ['ꜱᴇxᴏ']
handler.tags = ['audios']
handler.customPrefix =/SEXOOO|sexo|sex|Sexo/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
export default handler