let pp = './media/guapos.jpg'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)

    let a = ps.getRandom()
    let b = ps.getRandom()
    let c = ps.getRandom()
    let d = ps.getRandom()
    let e = ps.getRandom()
    let f = ps.getRandom()
    let g = ps.getRandom()
    let h = ps.getRandom()
    let i = ps.getRandom()
    let j = ps.getRandom()

let lista = `*🤩ɢᴜᴀᴘᴏꜱ ᴅᴇʟ ɢʀᴜᴘᴏ🤩*
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_* 
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*

${author}
`
    

 conn.sendFile(m.chat, pp, './media/guapos.jpg', lista, m, null, {
            contextInfo: {
                mentionedJid: [a, b, c, d, e, f, g, h, i, j] [lista]
            }
        })

    }
handler.help = ['ʀᴀɴᴋɢᴜᴀᴘᴏ']
handler.tags = ['juegos']
handler.command = ['rankguapos','guapos','lindos','ranklindos','rankguapos']
handler.group = true

export default handler


