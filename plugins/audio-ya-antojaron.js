
let handler = async (m, { conn }) => {
let vn = './media/ya antojaron.mp3'
conn.sendFile(m.chat, vn, 'ya antojaron.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ya antojaron|antojarooon|antojar|/i
handler.command = new RegExp
handler.help = ['ʏᴀ ᴀɴᴛᴏᴊᴀʀᴏɴ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
