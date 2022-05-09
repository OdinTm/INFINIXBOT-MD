// by odin el fucker


let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `‼Para calcular el porcentaje de alguien usa como ejemplo: ${usedPrefix}${command} @usuario`
    
let set // crear variable de base da tos

if (/gay/.test(command)) set = 'GAY😂🌈 funenlo por maricon '
if (/pendejo/.test(command)) set = 'PENDEJO😂 sea más listo joven 😡'
if (/maricon/.test(command)) set = 'MARICON,,, traiganle una falda a la niña 🤣🤣'
if (/chad/.test(command)) set = 'CHAD 😎 si las pone de rodillas no rezan por el 🤫'
if (/fucker/.test(command)) set = 'fucker 😎,, que no te de sida crack 🥵'
if (/sad/.test(command)) set = 'SAD 😥...Manden p0rno para que se anime 😈'
if (/kunno/.test(command)) set = 'FAN DE KUNNO😂🌈 saquenlo del grupo y violenlo a binarios por PUTO 😡😡 '  //<<<<<<<<<< crear if con el comando y la variable anterior e informacion
if (/bts/.test(command)) set = 'FAN DE BTS😂🌈 army detectada'
if (/badass/.test(command)) set = 'BADASS😎😎.. bien op el pana 💪 '
if (/arrogante/.test(command)) set = 'ARROGANTE😡😡... tal vez sicarios lo haran reflexionar.jpg 🥶 '
if (/verguenza/.test(command)) set = 'SIN VERGUENZA😡😡.. que lo doxeen dice 😕 '
if (/cristiano/.test(command)) set = 'CRISTIANO😇😇.. '
if (/basado/.test(command)) set = 'BASADO 😎, toda la razon🥶'
if (/puto/.test(command)) set = 'PUTOOOOO!!!! 😂😂😂'
if (/puta/.test(command)) set = 'PUTAAA 😂, *LA MAMA GRATIS!!*🥵'

    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* es *${(1000).getRandom()}*% ${set.replace('es', set )}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})


}
handler.help = ['ᴘᴇɴᴅᴇᴊᴏ', 'ɢᴀʏ', 'ᴄʜᴀᴅ', 'ғᴜᴄᴋᴇʀ', 'sᴀᴅ', 'ᴋᴜɴɴᴏ', 'ʙᴛs', 'ʙᴀᴅᴀss ', 'ᴀʀʀᴏɢᴀɴᴛᴇ', 'ᴠᴇʀɢᴜᴇɴᴢᴀ', 'ᴄʀɪsᴛɪᴀɴᴏ',
'ʙᴀsᴀᴅᴏ', 'ᴘᴜᴛᴏ','ᴘᴜᴛa']
handler.tags = ['juegos']
handler.command = /^(gay|pendejo|maricon|chad|fucker|sad|kunno|bts|badass|arrogante|verguenza|cristiano|basado|puta|puto)/i
handler.group = true
export default handler

// para agregar mas solo copiar una linea if, colocar comando junto con '' y agregar al handler.command