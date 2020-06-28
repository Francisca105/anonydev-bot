module.exports = async bot => {
    console.log(`${bot.user.username} está online. Ajuda ${bot.guilds.size} servidores e ${bot.users.size} membros.`)
    bot.user.setActivity("fiquei online!", {type: "STREAMING", url:"www.anonydev.com"});

   let statuses = [
       `${bot.guilds.size} servidores!`,
       `${bot.users.size} membros!`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "WATCHING"});

   }, 5000)

}