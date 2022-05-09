

let handler = async (m, { conn }) => {
let vn = './media/cabron.mp3'
conn.sendFile(m.chat, vn, 'cabron.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /buscando un cabron|cabron/i
handler.command = new RegExp
handler.help = ['ᴄᴀʙʀᴏɴ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
