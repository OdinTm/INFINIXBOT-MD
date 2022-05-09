
let handler = async (m, { conn }) => {
let vn = './media/linda.mp3'
conn.sendFile(m.chat, vn, 'linda.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /linda|perra|hermosa/i
handler.command = new RegExp

handler.help = ['ʟɪɴᴅᴀ']
handler.tags = ['audios']

handler.fail = null
handler.exp = 100
export default handler
