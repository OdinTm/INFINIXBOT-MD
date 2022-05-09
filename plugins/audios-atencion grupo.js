

let handler = async (m, { conn }) => {
let vn = './media/atencion.mp3'
conn.sendFile(m.chat, vn, 'atencion.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /atencion grupo|Atencion grupo|ATENCIÒN|AVISO IMPORTANTE|Atención grupo/i
handler.command = new RegExp
handler.help = ['ᴀᴛᴇɴᴄɪᴏɴ ɢʀᴜᴘᴏ' ]
handler.tags = ['audios']
handler.fail = null
handler.exp = 100
export default handler
