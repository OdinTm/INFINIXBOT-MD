
import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './media/manden porno.mp3'
conn.sendFile(m.chat, vn, 'manden porno.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /manden porno|desviando tema|porno/i
handler.command = new RegExp
handler.help = ['ᴍᴀɴᴅᴇɴ ᴘᴏʀɴᴏ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
