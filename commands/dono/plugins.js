const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Não tens permissão para executar este comando!')  
    let plugin = args[0],
        link = args[1],
        preco = args[2]
    let log = message.guild.channels.get('681906874974470185')
        
        message.reply('Comando executado com sucesso!')

            let embed = new Discord.RichEmbed()
            .setAuthor(plugin, client.user.displayAvatarURL, link)
            .addField("Plugin:", plugin)
            .addField("Link:", link)
            .addField("Preço:", preco + " R$")
            .setColor("#0ab2f5")
            .setThumbnail("https://cdn.discordapp.com/attachments/664913635658694658/681924211043729419/teste3.png")                
            .setTimestamp();
            log.send(embed)
            log.send("@everyone").then(evr => evr.delete(150))
}
module.exports.config = {
    name: "plugins",
    aliases: ["plugin", "new"]
   }