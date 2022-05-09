let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Adios a todos , , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['ʟᴇᴀᴠᴇ']
handler.tags = ['owner menu']
handler.command = /^(out|leavegc)$/i

handler.owner = true

export default handler

//creditos a kanna chan