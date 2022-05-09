import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
	let url = cos.getRandom()

  await conn.sendButton(m.chat, '🔹𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧', author, url, [['SIGUIENTE ➡', `#cosplay`]], m)}

handler.command = /^(cosplay)$/i

handler.help = ['ᴄᴏꜱᴘʟᴀʏ']
handler.tags = ['descargas'] 

handler.limit = true
global.cos = [
  "https://c4.wallpaperflare.com/wallpaper/509/938/505/cosplay-rem-anime-anima-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/568/112/968/takomayuyi-cosplay-mashu-kyrielight-fate-grand-order-fgo-hd-wallpaper-preview.jpg",
  "https://img2.wallspic.com/previews/1/4/4/6/6/166441/166441-xenon_cosplay_makima-cosplay-face-lip-leg-1440x2960.jpg",
  "https://img1.wallspic.com/previews/8/8/8/4/6/164888/164888-harley_quin-cosplay-harley_quinn-poison_ivy-toy-1440x2960.jpg",
  "https://img1.wallspic.com/previews/0/7/3/7/3/137370/137370-long_hair-supergirl-superhero-fictional_character-abdomen-1440x2960.jpg",
  "https://img2.wallspic.com/previews/1/1/6/8/4/148611/148611-focus-beauty-costume-water-cosplay-1440x2960.jpg",
  "https://img3.wallspic.com/previews/7/8/5/9/3/139587/139587-girl-pixel-animation-pink-anime-1440x2960.jpg",
  "https://img3.wallspic.com/previews/1/2/8/1/4/141821/141821-wig-naruto_shippuden-costume-joint-leg-1080x1920.jpg",
  "https://img3.wallspic.com/previews/2/2/8/1/4/141822/141822-naruto_shippuden-magenta-gesture-anime-mouth-1080x1920.jpg",
  "https://img1.wallspic.com/previews/6/1/8/1/4/141816/141816-sasuke_uchiha-beauty-lip-red-hinata_hyuga-1080x1920.jpg",
  "https://img3.wallspic.com/previews/1/1/2/7/3/137211/137211-uniform-tights-stocking-lady-ciri-1080x1920.jpg",
  "https://img3.wallspic.com/previews/2/0/6/9/3/139602/139602-animated_cartoon-animation-art-star_wars-jedi-1080x1920.jpg",
  "https://img3.wallspic.com/previews/3/0/2/8/5/158203/158203-blood_moon_diana_cosplay-blood_moon_diana-cosplay-pentakill-costume-1080x1920.jpg",
  "https://i.ibb.co/Lnx6hSF/1.jpg",
  "https://i.ibb.co/LR1dT5L/2.jpg",
  "https://i.ibb.co/PFWRtG9/3.jpg",
  "https://i.ibb.co/BwzxRYZ/4.jpg",
  "https://i.ibb.co/kBbKkqW/5.jpg",
  "https://i.ibb.co/V0F9nDL/6.jpg",
  "https://i.ibb.co/pwwQdyM/7.jpg",
  "https://i.ibb.co/SKMnWhL/8.jpg",
  "https://i.ibb.co/WPzg70k/9.jpg",
  "https://i.ibb.co/7Wr9NZj/10.jpg",
  "https://i.ibb.co/J7hRHQw/11.jpg",
  "https://i.ibb.co/937vN6S/12.jpg",
  "https://i.ibb.co/C6y68F9/13.jpg",
  "https://i.ibb.co/SQmBPtV/14.jpg",
  "https://i.ibb.co/ykBJZBJ/15.jpg",
  "https://i.ibb.co/H4g8C3B/16.jpg",
  "https://i.ibb.co/xhn4y82/17.jpg",
  "https://i.ibb.co/brPpj8y/18.jpg",
  "https://i.ibb.co/7X8n6Vy/19.jpg",
  "https://i.ibb.co/XJHFzMf/20.jpg",
  "https://i.ibb.co/k8fqqPm/21.jpg",
  "https://i.ibb.co/grDMJ7g/22.jpg",
  "https://i.ibb.co/s3jrBFP/23.jpg",
  "https://i.ibb.co/qng4Wjz/24.jpg",
  "https://i.ibb.co/qnmhdqp/25.jpg",
  "https://i.ibb.co/mvkzGSp/26.jpg",
  "https://i.ibb.co/tzqs3t3/27.jpg",
  "https://i.ibb.co/V3hCf95/28.jpg",
  "https://i.ibb.co/Q92dJjc/29.jpg",
  "https://i.ibb.co/r5PqHs4/wallpaperflare-com-wallpaper-1.jpg",
  "https://i.ibb.co/6Ys0fZt/wallpaperflare-com-wallpaper-2.jpg",
  "https://i.ibb.co/k5D3FkN/wallpaperflare-com-wallpaper-3.jpg",
  "https://i.ibb.co/6FPsdTQ/wallpaperflare-com-wallpaper-4.jpg",
  "https://i.ibb.co/dcQrbNz/wallpaperflare-com-wallpaper-5.jpg",
  "https://i.ibb.co/TqNbrG9/wallpaperflare-com-wallpaper-6.jpg",
  "https://i.ibb.co/qDTK69h/wallpaperflare-com-wallpaper-7.jpg",
  "https://i.ibb.co/jgHFx00/wallpaperflare-com-wallpaper-8.jpg",
  "https://i.ibb.co/5kLVRZn/wallpaperflare-com-wallpaper-9.jpg",
  "https://i.ibb.co/QMLWtVn/wallpaperflare-com-wallpaper-10.jpg",
  "https://i.ibb.co/kckLTqB/wallpaperflare-com-wallpaper-11.jpg",
  "https://i.ibb.co/Kr6RsYT/wallpaperflare-com-wallpaper-12.jpg",
  "https://i.ibb.co/wyN9RgM/wallpaperflare-com-wallpaper-13.jpg",
  "https://i.ibb.co/b1TBmcN/wallpaperflare-com-wallpaper-14.jpg",
  "https://i.ibb.co/QjVTLgN/wallpaperflare-com-wallpaper.jpg"
]

export default handler


