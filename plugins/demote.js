/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
   if (opts['self'])
       return
   // if (id in conn.chats) return // First login will spam
   if (this.isInit)
       return
   if (global.db.data == null)
       await loadDatabase()
   let chat = global.db.data.chats[id] || {}
   let text = ''
   switch (action) {
       case 'add':
       case 'remove':
           if (chat.welcome) {
               let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
               for (let user of participants) {
                   let pp = './src/avatar_contact.png'
                   try {
                       pp = await this.profilePictureUrl(user, 'image')
                   } catch (e) {
                   } finally {
                       text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || '🔹Bienvenido seas , @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                           (chat.sBye || this.bye || conn.bye || '🔹Adiós, @user!')).replace('@user', '@' + user.split('@')[0])
                       this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                   }
               }
           }
           break
       case 'promote':
           text = (chat.sPromote || this.spromote || conn.spromote || '@user ```Ahora es administrador del grupo 🔺```')
       case 'demote':
           if (!text)
               text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```Ya no es administrador🔻```')
           text = text.replace('@user', '@' + participants[0].split('@')[0])
           if (chat.detect)
               this.sendMessage(id, { text, mentions: this.parseMention(text) })
           break;
   }
}
