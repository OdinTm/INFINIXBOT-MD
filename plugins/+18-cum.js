

import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'   
	let url = cum[Math.floor(Math.random() * cum.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', author, url, [['SIGUIENTE ➡', `#cum`]], m)}

handler.command = /^(cum)$/i
handler.tags = ['menu 18']
handler.help = ['ᴄᴜᴍ']
 
handler.limit = 3
global.cum = [
"https://external-preview.redd.it/cZRyYEKjgfyhjLIqQLx7w3YG5pZd_kcKD2-wMB0flwY.jpg?auto=webp&s=65f3235186f9e88964a0d8b27594d086e97b6fd9",
"https://i.redd.it/m8amamilzyv81.jpg",
"https://external-preview.redd.it/DZu-KJvbBU-hud3bcNMTXG_00BHkG2TO3Yn6NGu1QJM.jpg?auto=webp&s=ed5f4c23f7377f12e42eecd729fbdaf7ee129d98",
"https://external-preview.redd.it/GdeBWP1vAV74YvJjw1zI_aV3_d89CkTHO5j6ffcMyWY.jpg?auto=webp&s=4182e6c3d20ccc1ef801e0a627aa34d8b8105b53",
"https://preview.redd.it/03acc91uixv81.jpg?width=640&crop=smart&auto=webp&s=d891db5a101edf234e1c957f93c814422323bdd4",
"https://i.redd.it/wmr1bedizuv81.jpg",
"https://external-preview.redd.it/AIqDvzCkKmDgD2CeHK6fyOVMvyr6G5ZuQzf4c6tjJ4M.jpg?auto=webp&s=0ad686c71ef2e6d10837fcff68c2b5505df23b48",
"https://external-preview.redd.it/bVOs5yDpefovC7529ZaL9lzOZXysHsS898FhSqWEMyA.jpg?auto=webp&s=f80d88fb4bbe7700e431630bad0da3a6c7449cb7",
"https://i.redd.it/2pkylv4vilv81.jpg",
"https://external-preview.redd.it/z9xnJwcR32AkVynw-nAuh-lhp858Ntn0L6bsqdzSOi4.png?auto=webp&s=b1d682afd552357ff686b7df6e544d20da080c19",
"https://external-preview.redd.it/dXPQMlVZX7W7WglxQuvWHJz_7MReHIoggYt6f_SBOHw.png?auto=webp&s=78dcb6378606165be701a523acd5e5f27df0eabd",
"https://external-preview.redd.it/7YafWKQtHPaGrakziGRyZRc4VOHNsO0TsY8nI4txO0E.jpg?auto=webp&s=e4010f9043b99339ab284171208d6b1d62ee6649",
"https://external-preview.redd.it/XDxQMShfeGb8sN2FKTKcdFqlOorYfuyiZqkdiWbkh8I.jpg?auto=webp&s=09189c46b5bac7b7f17562a61e362c7f587323a7",
"https://i.redd.it/lo85r2chddv81.jpg",
"https://preview.redd.it/dy6ggmonn9p81.gif?width=640&format=mp4&s=c82800ec550d3bcc1cd6859e88119aec33cfaeb6",
"https://external-preview.redd.it/JDvkVY_ZC1ZyL9i4dD2cIv94LjmAMyiZTdSxeaj3njY.jpg?auto=webp&s=d281f93ed9209f31430e42dd0021fc441c8e049c",
"https://preview.redd.it/vnajaf4px8i81.gif?width=640&format=mp4&s=a95ccfdb16168fece8f79349fc673e6c668ffdbf",
"https://external-preview.redd.it/Jxaupq7uuePAs4_ixzbbTSJW3DeZ0W5b7xvpMG6Pf94.gif?format=mp4&s=d9bfc67faecd5369cda442d77a4f0b37b4f93729",
"https://i.redd.it/t3s0f7n7ubv81.jpg",
"https://external-preview.redd.it/jgAzSeJR1ls8Reble1iE2lL1pn1LFC7a539-wkqa4A0.jpg?auto=webp&s=ae31fe44157104ce359f884d47dbb6850f2afdec",
"https://preview.redd.it/zlwdxvdw81a81.gif?width=640&format=mp4&s=6f28ea096f3aa4970ca1deb9e95689c12c7fcf76",
"https://i.redd.it/51oomdieb7v81.jpg",
"https://preview.redd.it/p405rqx25zu81.jpg?width=640&crop=smart&auto=webp&s=91e1c2043119b6fbf80d3b6061a17121a27d236e",
"https://external-preview.redd.it/UgcYevo7yQSYvqDKkQSs4bWvy8wYY-48utLfDCESMPA.jpg?auto=webp&s=5edabd017b4fefd05a40c5000f61bc0638d7c6c8",
"https://preview.redd.it/lgwjder8f1g81.gif?format=mp4&s=dbc8c7cc7cf3d0e5472663eed5731099c0e8f177",
"https://preview.redd.it/tyzl2amnglp81.gif?width=640&format=mp4&s=08456c5adcb6bafb5dbc71047317e9d5c4cc4ee9",
"https://external-preview.redd.it/wXMSZeuCK-ezbQHJEdgSFRIun2P7LK7Js7w0VWSLOrI.jpg?auto=webp&s=f482c78547ebb894bfc3287fb338a0f1449348d1",
"https://external-preview.redd.it/xsORAcdGClD2xhBNiUIl4raNnnxyNjIj0mF6_wNSck4.jpg?auto=webp&s=93a51290704361dee16452eb1da5d911d51b533a",
"https://external-preview.redd.it/FKdA28tl2n8pyBQJ8dEm6Sjjxa-IUxxCH12soDdR8c4.jpg?auto=webp&s=28b5cc1086fc3ac44afe6106a5d0c38caf7c6efd"

]

export default handler

//by odin wa.me/524774739565