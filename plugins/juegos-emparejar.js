let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝙃𝙖𝙣 𝙨𝙞𝙙𝙤 𝙚𝙢𝙥𝙖𝙧𝙚𝙟𝙖𝙙𝙤𝙨${toM(b)},💓*`, null, {
mentions: [a, b]
})}
handler.help = ['ᴇᴍᴘᴀʀᴇᴊᴀʀ']
handler.tags = ['juegos']
handler.command = ['emparejar']
handler.group = true
export default handler
