

let handler = async (m, { conn }) => {
let vn = './media/falda.mp3'
conn.sendFile(m.chat, vn, 'falda.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /falda|niña|/i
handler.command = new RegExp
handler.help = ['ꜰᴀʟᴅᴀ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
