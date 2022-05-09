
// by odin el fucker
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  if (!db.data.chats[m.chat].antojar && m.isGroup) throw '*‼Comandos +18 desactivados, ¿Deseas activarlos? si eres administrador escribe #enable antojar.*' 
	let url = job[Math.floor(Math.random() * job.length)]

  await conn.sendButton(m.chat, '🔹ᴛᴏᴍᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴍᴀꜱᴛᴇʀ 🥵', author, url, [['SIGUIENTE ➡', `#mamada`]], m)}

handler.command = ['mamada']
handler.tags = ['menu 18']
handler.help = ['ᴍᴀᴍᴀᴅᴀ']
 
handler.limit = 4
global.job = [ 
"https://external-preview.redd.it/O4dQVak3T-I4Hu-LrnMks-59GW8Og0Ioxf7SylCdowA.gif?format=mp4&s=bc4425f2f796c427d7ae3aabe453f13d5700c3cc",
"https://preview.redd.it/4roszt1jdko51.gif?format=mp4&s=d7715b2fc9b65fd1b01ebd1a60c619b41c79a155",
"https://external-preview.redd.it/NYeyPDWI5q8d7SxB_JwmRs07pZENZHIAmBsCcfEnBBY.gif?format=mp4&s=2ae29880eec45af14437dfab366bcaab6da47195",
"https://external-preview.redd.it/uFS_Y-fusB4JfbXmY1qTP89TQHrVS95b8Qexw-8zTu4.gif?width=640&format=mp4&s=9cd38503ddafe82a6e88fc680ce1857288304d2d",
"https://preview.redd.it/gecvpofl5lu81.jpg?width=640&crop=smart&auto=webp&s=c5167aa52726d9efccca2b1501d78cf47606807c",
"https://external-preview.redd.it/DkXf2xHXWfuFSzZYlQ9kZTpzI4CFW9uSZhRoF9LaLPE.gif?width=600&format=mp4&s=d0afb99d613ae4e3a9d714d38a06d650e8a90cac",
"https://external-preview.redd.it/bpx0N9jBYDfxAFmmVDMkKVE2k16w_anotzhMR4-_nEM.gif?width=640&format=mp4&s=49ead65748b25975491a42719b2def338673e312",
"https://external-preview.redd.it/er0VgF7YpnPUZ-89J5eLL7oU7pZsxGlyFg0Eg86HA_A.gif?width=640&format=mp4&s=312f134f8ab632a0656182101812874182fa51b7",
"https://external-preview.redd.it/q-ExC84ODbTlvAnYaSSeUF63IrZUk1yb4ZftdcwhwJY.gif?width=640&format=mp4&s=5180f472391f485ea2c895430a83854eb30347e0",
"https://preview.redd.it/0zsp5go60ie81.gif?width=640&format=mp4&s=45daa7409d01911c3fe0d426252c71ee50977d40",
"https://preview.redd.it/ilfuxlfghqb81.gif?width=500&format=mp4&s=1fc2a7b9585dab30fdc225e0b29a99621d256117",
"https://preview.redd.it/6lqr74mii5j61.gif?width=640&format=mp4&s=f813a170afcf629dff8d6b8b6294f54ea10895af",
"https://preview.redd.it/vm3afrxo9av81.gif?width=640&format=mp4&s=4595a0f38f7844e2687ff76e66cee491f5e25d58",
"https://preview.redd.it/86mn4u9ixgw81.gif?width=640&format=mp4&s=83e5ebcec45afaac5b5f7ea86c8f2a663256fd3c",
"https://preview.redd.it/r031clsxvgw81.gif?width=640&format=mp4&s=0de051cd576cbdd9ce6e538a319488c4700fd774",
"https://preview.redd.it/80xnt55nrcw81.gif?format=mp4&s=660900ab7c087cf633a076408848005000e0a4f9",
"https://preview.redd.it/zgwb1m01e0w81.gif?width=562&format=mp4&s=2267de699d4dd9b239a5cfec25554f456e1fe03d",
"https://preview.redd.it/uhqnl4utraw81.gif?width=640&format=mp4&s=9629b8f447c15e56ba77a48658b89e008995c87c",
"https://preview.redd.it/cj0b7mz49vq81.gif?width=750&format=mp4&s=8fd48882607eed70a3662eca5027581cf11c5c99",
"https://preview.redd.it/q1y60e9noct81.gif?width=1720&format=mp4&s=28c0db7738e8c09c5c7a0b5489c92c87841b5961",
"https://preview.redd.it/i4uymz0bt1s81.gif?width=698&format=mp4&s=0fb2073ccb7ace903b65a8285001fbc7680585a9",
"https://preview.redd.it/dd9fgqkmqtn81.gif?width=1200&format=mp4&s=3c5c9aadd799e922e9e247ba878e141188d460aa",
"https://preview.redd.it/xnf5xmylrig81.gif?width=2140&format=mp4&s=af7a642545fb8e1e0132e72374a3f33c2c96a901",
"https://preview.redd.it/nr35yv505x481.gif?width=1600&format=mp4&s=c9bf045f86a74a7986b24d464a15e295fb71182c",
"https://preview.redd.it/izfofdqcrlh81.gif?width=600&format=mp4&s=42047e746987e81ac9f75bc324ed4348d6491dfe",
"https://preview.redd.it/k69ymhkdioc81.gif?width=470&format=mp4&s=7340a15e9f0598650383265365755086fb7b31e3",
"https://preview.redd.it/ovbnhhns0il81.gif?width=600&format=mp4&s=7f2d14ee612ba64afd073b15afbba986599f5ae4",
"https://preview.redd.it/xqwigqpgcjd81.gif?width=800&format=mp4&s=fc8a8cdac9a18d67b97cd25944ef275a2bc8bf26",
"https://preview.redd.it/gbhwdx2h1kn81.gif?width=1920&format=mp4&s=27c4859a32c6db542f6213b5925d9a8ff47b639e",
"https://preview.redd.it/ah7q5gbm5cl81.gif?width=768&format=mp4&s=4ab981fc2aa39523bb64c776a03efa88e3fffcd5",
"https://preview.redd.it/0zq9mao777e81.gif?width=540&format=mp4&s=1d52dd9e4cb6ee3b8c55a7c0af0ea8bbeaeb7559",
"https://preview.redd.it/lux5xefms9o71.gif?width=1920&format=mp4&s=feb9d0e7f963c0dae3c6c7f8833594d6aa513668",
"https://preview.redd.it/6r2eqfd2u1081.gif?width=720&format=mp4&s=00b864ff192d64f8bb6cacfd65f6f7418d8c8fcf",
"https://preview.redd.it/vma5gqeo6nn71.gif?width=560&format=mp4&s=0c2eeaca5a82b8ec7533f49c02aa2356b9f05530"

]

export default handler


