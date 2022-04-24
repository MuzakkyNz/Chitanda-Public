//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.meki = '6285731749158'
global.ownerNumber = '6285731749158'
global.botname = 'Z A K Z Z - ＭＤ' 
global.ownername = 'Zakky Peler'
global.owner = ['6285731749158'] 
global.pemilik = ['6285731749158'] 
global.premium = ['6285731749158'] 
global.pengguna = '𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳'
global.botnma = 'Z A K Z Z - ＭＤ' 
global.ownernma = 'Zakky Peler'
global.packname = '✨ Zakzz ✨' 
global.author = 'Z A K Z Z - ＭＤ' 
global.sessionName = 'kizakixd'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Berhasil.',
    admin: 'Fitur Khusus Admin Tod!',
    botAdmin: 'Jadiin Gw Admin Dulu Tod!',
    owner: 'Fitur Khusus Owner Tod',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Sabar Tod...',
    done: 'Nichh Tod',
    endLimit: 'Limit Harian Mu Telah Habis Tod, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah Bodoh!!\nSertakan Link setelah Command..',
    example1: 'Welcome Beban @user Di Group @subject Jangan Lupa Baca Rules Ya Tod @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye Beban @user Di Group @subject Jangan Balik Lagi Lu @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
