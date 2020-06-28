const { prefix } = require("../../config.json");

module.exports = async (bot, message) => { 
    //sistema de perguntas
    if (message.content.startsWith("Qual o link loja?")){
        message.channel.send(`O link da loja é www.anonydev.com`)
    }        
    //Resposta a menção
    if (message.content.startsWith(`<@${bot.user.id}>`)){
        message.channel.send(`Eu sou apenas um bot.`)
      }

    //Bloqueador de invites
    let convite = /(discord.gg|discordapp.com)\/(invite)?/ig.test(message.content)
        if(convite === true) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
            message.delete()
            message.reply('Não pode divulgar convites de outros servidores aqui!')
        }        
        
    //Comandos
    if(message.author.bot || message.channel.type === "dm") return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)

     
}