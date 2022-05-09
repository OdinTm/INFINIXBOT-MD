

let handler = async (m, { conn }) => {
let vn = './media/gemidos.mp3'
conn.sendFile(m.chat, vn, 'gemidos.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /gemidos|gmi2|rico|sexy|/i
handler.command = new RegExp
handler.help = ['ɢᴇᴍɪᴅᴏꜱ ']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler

