const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Não tens permissão para executar este comando!')  
    let plugin = args[0]
    let changes = args.slice(1).join(' ')
    let log = message.guild.channels.get('681906872332451842')
    let link = "https://anonydev.com"        
        message.reply('Comando executado com sucesso!')

             let embed = new Discord.RichEmbed()
            .setAuthor(plugin, client.user.displayAvatarURL, link)
            .addField("Plugin:", plugin)
            .addField("Mudanças:", changes)
            .setColor("#0ab2f5")
            .setThumbnail("https://cdn.discordapp.com/attachments/664913635658694658/681924211043729419/teste3.png")                
            .setTimestamp();
            log.send(embed)
            log.send("@everyone").then(evr => evr.delete(150))
}
module.exports.config = {
    name: "changelog",
    aliases: ["chlog"]
   }