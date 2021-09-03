let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/DyanLiaBOT
├〔 Sport temenya ya 〕
├ https://trakteer.id/trito-apriansyah/tip
└────
`.trim(), '© auliabot', 'Donasi', '.donasi')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
