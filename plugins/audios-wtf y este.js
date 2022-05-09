

let handler = async (m, { conn }) => {
let vn = './media/wtf.mp3'
conn.sendFile(m.chat, vn, 'wtf.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /wtf|quien es|quien eres|y este|desconocido/i
handler.command = new RegExp
handler.help = ['ᴡᴛꜰ ʏ ᴇꜱᴛᴇ','**COMANDOS SIN #**']
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
