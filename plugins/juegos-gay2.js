

let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
      avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'iss.png', '𝓐𝓼𝓲 𝓮𝓼, 𝓼𝓸𝔂 𝓶𝓪𝓻𝓲𝓬𝓸𝓷 𝔂 𝓮𝓼𝓽𝓮 𝓯𝓲𝓵𝓽𝓻𝓸 𝓵𝓸 𝓭𝓮𝓶𝓾𝓮𝓼𝓽𝓻𝓪 🥵🥵', m)
  }
  
  handler.help = ['ɢᴀʏ2']
  handler.tags = ['juegos','img edit']
  
  handler.command = /^(gay2|gei2|maricoooon|homosexual)$/i
  
  export default handler