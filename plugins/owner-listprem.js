

let handler = async (m, { conn }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `🔹「 Lista de usuarios PREMIUM 」🔹
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner menu']
handler.command = /^(listprem|premlist)$/i
handler.owner = true

export default handler
