
let handler = async (m, { conn }) => {
let vn = './media/duro2.mp3'
conn.sendFile(m.chat, vn, 'duro2.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /duro2|duro 2 horas|haciendolo|bien rico|favorito/i
handler.command = new RegExp
handler.help = ['ᴅᴜʀᴏ 2 ʜᴏʀᴀꜱ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler