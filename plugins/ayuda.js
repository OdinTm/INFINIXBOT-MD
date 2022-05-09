

let handler = async (m, { conn }) => {

    let info1 = '🅐🅨🅤🅓🅐 🅓🅔🅛 🅑🅞🅣'


    let info
        = `
⁉ INFORMACION DEL BOT 💡
    
🖥 Estado del bot: Activo ☑
    
🔹¿*Que es un bot*?❓
    
Un bot de whatsapp es una inteligencia artificial con la cual podrás interactuar
a través de comandos que puedes ver escribiendo #menu, estos comandos son capaces 
de realizar diversas tareas como descargar música, videos, crear stickers, descarga de 
imágenes etc. Recuerda que cada comando debe ser ejecutado con su prefijo # antes de escribirlo, ejemplo #aesthetic.
Si intentas poner un comando ajeno al bot este simplemente no respondera, asi que revisa bien el menu de comandos disponibles
  
🔹*PRIVACIDAD*:

INFINIX bot no comparte ni ve material recibido a ningún tipo de base de datos todo es eliminado constantemente.
    
🔹*Fallos o lentitud en respuesta:*
    
Si bien el bot esta activo las 24 horas del dia puede que en determinado momento el bot deje de funcionar por unos minutos si pasa mas de 10 minutos ser pascientes, el bot volvera. También puede que varios comandos no funcionen debido a mala respuesta del servidor, si no funciona simplemente intenta en otro momento.
    
🔹*CREADOR*:
    
Bot GRATUITO creado por Odin, programador novato. 

🔹*LIMITES*

Para evitar abusos del bot, este tiene un sistema de limites el cual te consumira segun el comando ejecutado, por defecto se otorgan 15 limites por usuario pero puedes obtener mas al dia usando el comando #reclamarxp, una vez hecho esto ejecutar el comando #buyall para obtener mas limites. Recuerda que solo es posible una vez al dia asi que usalos sabiamente. De igual manera si eres activo e interactuas con el bot podras comprar mas limites al ganar mas EXP.
EXP = Experiensa de uso del bot
    
🔹*Union a grupos o uso por chat privado*.
    
Se admite chat privado,se puede unir grupos (1 por usuario, y NOTA: Esto puede cambiar si el que este ejecutando este bot lo decide), sin embargo, al primer intento de robo o abuso del bot se baneará permanentemente y se tomaran cartas en el asunto. 
    
🔹*Descarga del bot*:
 
Bot con descarga totalmente gratuita, link del respositorio en Github donde estan todas las instrucciones como instalar en android y windows: https://github.com/OdinTm/INFINIXBOT-MD

🔹*SUB-BOTS*

Este bot no admite el jadibot o sub bots debido a que puede llegar a ser incontrolable.

`
    conn.sendButton(m.chat, info1, info, author, [['MENU', `#menu`]], m)
}


handler.customPrefix = /ayuda|terminos|infobot|informacion|dildo|botmorto/i
handler.command = new RegExp
handler.help = ['ᴀʏᴜᴅᴀ']
handler.tags = ['main']
handler.fail = null
export default handler

