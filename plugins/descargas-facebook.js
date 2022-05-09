import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🔹Para descargar un video de facebook usa como ejemplo: ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
}
handler.help = ['ꜰᴀᴄᴇʙᴏᴏᴋ <ʟɪɴᴋ>']
handler.tags = ['descargas']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = 2
export default handler