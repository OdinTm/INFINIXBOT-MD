
// by odin el fucker
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
	let url = chica[Math.floor(Math.random() * chica.length)]

  await conn.sendButton(m.chat, '🔹🔹𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧', author, url, [['SIGUIENTE ➡', `#ecchi`]], m)}

handler.command = ['lentes']
handler.tags = ['descargas']
handler.help = ['ʟᴇɴᴛᴇꜱ <ᴡᴀʟʟᴘᴀᴘᴇʀ>']
 
handler.limit = 1
global.chica = [
 "https://external-preview.redd.it/moIkNdE829ggcVAY-fI8EaAySQ8QuylbDXofIIpGBcg.jpg?auto=webp&s=48edf0027223b26229257b0d836b7b04d68fbcb4",
 "https://c4.wallpaperflare.com/wallpaper/830/284/1014/hatsune-miku-vocaloid-anime-girls-fan-art-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/336/392/934/anime-rascal-does-not-dream-of-bunny-girl-senpai-glasses-rio-futaba-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/572/628/997/atdan-women-anime-girls-original-characters-wallpaper-preview.jpg",
 "https://wallpapercave.com/wp/wp5109461.jpg",
 "https://wallpapercave.com/wp/wp6668997.png",
 "https://wallpapercave.com/wp/wp6382551.jpg",
 "https://wallpapercave.com/wp/wp6381954.jpg",
 "https://c4.wallpaperflare.com/wallpaper/503/85/287/sheele-akame-ga-kill-anime-girls-violet-hair-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/341/253/301/women-model-fantasy-girl-fantasy-art-long-hair-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/771/964/875/anime-girls-original-characters-women-brunette-blue-eyes-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/946/145/156/anime-anime-girls-fate-grand-order-shielder-fate-grand-order-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/560/528/865/anime-anime-girls-sunset-sweater-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/801/782/475/anime-anime-girls-long-hair-glasses-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/605/702/523/anime-anime-girls-fate-grand-order-shielder-fate-grand-order-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/663/139/684/anime-anime-girls-fate-grand-order-shielder-fate-grand-order-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/215/871/615/anime-anime-girls-sweater-original-characters-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/519/678/535/anime-anime-girls-kantai-collection-akagi-kancolle-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/457/619/617/anime-girls-glasses-picture-in-picture-purple-hair-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/662/216/978/anime-anime-girls-long-hair-green-eyes-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/89/178/479/anime-girls-glasses-black-hair-women-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/581/417/106/anime-anime-girls-kantai-collection-ooi-kancolle-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/942/982/442/anime-anime-girls-long-hair-redhead-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/667/419/797/anime-anime-girls-vocaloid-short-hair-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/120/883/604/anime-anime-girls-kantai-collection-choukai-kancolle-wallpaper-preview.jpg",
 "https://www.wallpaperflare.com/anime-girls-original-characters-purple-hair-long-hair-looking-at-viewer-wallpaper-udjul",
 "https://c4.wallpaperflare.com/wallpaper/1015/875/601/anime-anime-girls-neko-ears-glasses-animal-ears-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/675/319/717/anime-girls-simple-background-sweater-glasses-miniskirt-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/708/964/64/the-idolm-ster-cinderella-girls-blue-eyes-sagisawa-fumika-anime-girls-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/18/556/835/2d-anime-anime-girls-digital-digital-art-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/47/973/149/anime-anime-girls-fate-series-fate-grand-order-yu-miaoyi-fate-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/193/731/691/anime-anime-girls-horns-glasses-dark-hair-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/811/618/388/anime-anime-girls-vocaloid-hatsune-miku-glasses-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/749/248/59/anime-girls-original-characters-anime-portrait-display-vertical-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/708/267/763/anime-girl-glasses-petals-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/408/947/812/2d-anime-anime-girls-digital-digital-art-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/429/873/228/pink-hair-purple-eyes-anime-anime-girls-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/708/342/457/anime-girls-yellow-eyes-mei-overwatch-glasses-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/732/350/394/school-uniform-white-background-glasses-anime-girls-anime-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/323/753/286/glasses-illustrations-blush-meganekko-anime-swimsuits-anime-girls-arms-raised-5937x4086-anime-hot-anime-hd-art-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/251/511/722/portrait-display-anime-girls-original-characters-glasses-school-uniform-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/216/564/920/2d-anime-anime-girls-digital-digital-art-hd-wallpaper-preview.jpg",
 "https://c4.wallpaperflare.com/wallpaper/682/209/261/anime-girls-anime-fate-grand-order-shielder-fate-grand-order-glasses-hd-wallpaper-preview.jpg",
 "https://www.wallpaperflare.com/anime-girls-glasses-highs-original-characters-thigh-wallpaper-hnalt"
]

export default handler


