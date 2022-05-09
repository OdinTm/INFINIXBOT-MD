import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```🔹Reiniciando bot . . .```')
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['ʀᴇꜱᴛᴀʀᴛ']
handler.tags = ['owner menu']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler

//creditos a kanna chan