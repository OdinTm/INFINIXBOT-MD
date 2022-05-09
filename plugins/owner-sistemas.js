
let handler = async (m, { conn }) => {

let text = `🔷 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙨𝙞𝙨𝙩𝙚𝙢𝙖𝙨 𝙖 𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙖𝙧 𝙤 𝙙𝙚𝙨𝙝𝙖𝙗𝙞𝙡𝙞𝙩𝙖𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩 🔷`


const sections = [
{
 title: `-✦𝗦𝗜𝗦𝗧𝗘𝗠𝗔𝗦 𝗗𝗘𝗟 𝗕𝗢𝗧✦-`,
 rows: [
{title: "✦𝗦.𝗥𝗘𝗦𝗧𝗥𝗜𝗖𝗧 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢✦", rowId: '.enable restrict', description:'Pulsa aqui para *ACTIVAR* el sistema RESTRICT' },
{title: "✦𝗦.𝗥𝗘𝗦𝗧𝗥𝗜𝗖𝗧 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable restrict', description:'Pulsa aqui Para *DESACTIVAR* el sistema RESTRICT' },   
{title: "✦𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable antilink', description:'Pulsa aqui para *ACTIVAR* el sistema ANTILINK' },
{title: "✦𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable antilink', description:'Pulsa aqui Para *DESACTIVAR* el sistema ANTILINK' },
{title: "✦𝗔𝗡𝗧𝗜𝗦𝗣𝗔𝗠 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable antispam', description:'Pulsa aqui para *ACTIVAR* el sistema ANTISPAM' },
{title: "✦𝗔𝗡𝗧𝗜𝗦𝗣𝗔𝗠 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable antispam', description:'Pulsa aqui para *DESACTIVAR* el sistema ANTISPAM' },
{title: "✦𝗦.𝗔𝗡𝗧𝗢𝗝𝗔𝗥 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable antojar', description:'Pulsa aqui para *ACTIVAR* el sistema ANTOJAR' },
{title: "✦𝗦.𝗔𝗡𝗧𝗢𝗝𝗔𝗥 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable antojar', description:'Pulsa aqui para *DESACTIVAR* el sistema ANTOJAR' },
{title: "✦𝗦.𝗣𝗨𝗕𝗟𝗜𝗖𝗢 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable public', description:'Pulsa aqui para *ACTIVAR* el sistema publico.' },
{title: "✦𝗦.𝗣𝗨𝗕𝗟𝗜𝗖𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable public', description:'Pulsa aqui para *DESACTIVAR* el sistema publico'},
{title: "✦𝗦𝗢𝗟𝗢 𝗖.𝗣𝗥𝗜𝗩𝗔𝗗𝗢 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable pconly', description:'Pulsa aqui para *ACTIVAR* el sistema de SOLO CHAT PRIVADO' },
{title: "✦𝗦𝗢𝗟𝗢 𝗖.𝗣𝗥𝗜𝗩𝗔𝗗𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable pconly', description:'Pulsa aqui para *DESACTIVAR* el sistema SOLO CHAT PRIVADO' }, 
{title: "✦𝗦𝗢𝗟𝗢 𝗖.𝗚𝗥𝗨𝗣𝗔𝗟𝗘𝗦 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable gconly', description:'Pulsa aqui para *ACTIVAR* el sistema SOLO CHATS GRUPALES.'
},
{title: "✦𝗦𝗢𝗟𝗢 𝗖.𝗚𝗥𝗨𝗣𝗔𝗟𝗘𝗦 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable gconly', description:'Pulsa aqui para *DESACTIVAR* el sistema SOLO CHATS GRUPALES.'
},
{title: "✦𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔☑✦", rowId: '.enable welcome', description:'Pulsa aqui para *ACTIVAR* el sistema de bienvenida automatico' }, 
{title: "✦𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔❌✦", rowId: '.disable welcome', description:'Pulsa aqui para *DESHABILITAR* el sistema de bievenida automatico.' },
{title: "✦𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢☑✦", rowId: '.enable autoread', description:'Pulsa aqui para *ACTIVAR* el sistema de leida de mensajes automatico' },  
{title: "✦𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢❌✦", rowId: '.disable autoread', description:'Pulsa aqui para *DESACTIVAR* el sistema de leida de mensajes automatico' }  
]}] 

const listMessage = {
    text: text,
    footer: author,
    title: '-✦𝗦𝗜𝗦𝗧𝗘𝗠𝗔𝗦 𝗗𝗘𝗟 𝗕𝗢𝗧✦-',
    buttonText: "🔹𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜‼",
    sections
  }

await conn.sendMessage(m.chat, listMessage, author, m)
 




}



handler.help = ['ꜱɪꜱᴛᴇᴍᴀꜱ']
handler.tags = ['owner menu'] 
handler.command = ['sistemas'] 

export default handler


// lista simple a la mano de SISTEMAS del bot, by odin locote