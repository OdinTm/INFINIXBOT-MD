let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🪪${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`🔹𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦:
${txt}
`.trim())
}
handler.help = ['ɢʀᴏᴜᴘꜱ', 'ɢʀᴏᴜᴘʟɪꜱᴛ']
handler.tags = ['owner menu']
handler.command = /^(group(s|list))$/i
handler.owner = true

export default handler