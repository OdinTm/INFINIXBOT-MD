import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
🔺Felicitaciones, has subido de nivel‼
*${before}* -> *${user.level}*
🔹use *.profile* para verificar su nuevo nivel ☑
	`.trim())
    }
}
export const disabled = true