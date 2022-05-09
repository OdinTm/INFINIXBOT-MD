



import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*'
	let url = muslos[Math.floor(Math.random() * muslos.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', author, url, [['SIGUIENTE ➡', `#muslos`]], m)}

handler.command = ['muslos']

handler.help = ['ᴍᴜꜱʟᴏꜱ']
handler.tags = ['menu 18']
 
handler.limit = 2
global.muslos = [
	"https://preview.redd.it/j2atzo32k9l81.jpg?width=640&crop=smart&auto=webp&s=9e339987302cf89ba72a757be5b32b1a043f778a", 
	"https://preview.redd.it/nafxgr82k9l81.jpg?width=540&format=pjpg&auto=webp&s=361ab3939c2884f49fc1a28dc28754e0de9f18bf",
	"https://preview.redd.it/hlmcg6b2k9l81.jpg?width=864&format=pjpg&auto=webp&s=cfd89f4a108cb24e25c1cef096967f70f8642139",
	"https://preview.redd.it/x65tkqe2k9l81.png?width=960&format=png&auto=webp&s=92f1ccfa55df7146eec938b066e5564bf23f34eb",
	"https://preview.redd.it/9zx17pi2k9l81.jpg?width=640&crop=smart&auto=webp&s=374a90ce51883a3c15811ad576270f0e96bf9afd",
	"https://preview.redd.it/pqlgdvl2k9l81.jpg?width=640&crop=smart&auto=webp&s=a8f0cfd22cc39fbb83af59d63c823ace312a0155",
	"https://preview.redd.it/walyxxn2k9l81.jpg?width=640&crop=smart&auto=webp&s=18c6bbe17b3dfcb2ac57eff764be59c4c0d69e90",
	"https://preview.redd.it/hiro2wp2k9l81.jpg?width=640&crop=smart&auto=webp&s=0aafd3cadb63158376e1e718222857fbc4417f31",
	"https://preview.redd.it/z8q5wpt2k9l81.jpg?width=640&crop=smart&auto=webp&s=4807f83c4ab74e93a13930ff489f098d4c353c89",
	"https://preview.redd.it/s569wk01a9l81.jpg?width=640&crop=smart&auto=webp&s=bb292572a8b75549b1f0340e2810790684ec9205",
	"https://preview.redd.it/fweb9fm0rpe81.jpg?width=960&crop=smart&auto=webp&s=e8be8002c050567b951f2ac9ad955d5991eb1c6a",
	"https://preview.redd.it/hkcitfm0rpe81.jpg?width=640&format=pjpg&auto=webp&s=fb6d43ad73d4934508b2364d8dba0becfc4656a0",
	"https://preview.redd.it/l7yl7fm0rpe81.jpg?width=473&format=pjpg&auto=webp&s=6aa223c8b500f2f22bc0835c603c1579b5ab72b1 ",
	"https://preview.redd.it/tbsmbim0rpe81.jpg?width=640&crop=smart&auto=webp&s=01dee6741c1302b7fb0f0a942ab9d97113a22f3c",
	"https://i.redd.it/m8xixyka1s181.jpg",
	"https://preview.redd.it/itb30ye4fvn61.png?width=640&crop=smart&auto=webp&s=aa05be26141ef6d21bfb99cdce8cdcc8af18dd66",
	
]

export default handler