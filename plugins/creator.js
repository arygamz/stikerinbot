function handler(m) {
  this.sendContact(m.chat, '6285865462352', this.getName('6285865462352@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
