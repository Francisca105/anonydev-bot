const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Não tens permissão para executar este comando!')  
    let argsresult;
    let mChannel = message.mentions.channels.first()
        
        message.delete()
        if(mChannel) {
            argsresult = args.slice(1).join(" ")
            let embed = new Discord.RichEmbed()
            .setAuthor("Anúncio")
            .setDescription(argsresult)
            .setColor("#77f50a")
            .setFooter(client.user.username + " » " + message.author.tag, client.user.avatarURL)
            .setTimestamp();
            mChannel.send(embed)
            message.channel.send("@everyone").then(evr => evr.delete())
        } else {
            argsresult = args.join(" ")
            let embed = new Discord.RichEmbed()
            .setAuthor("Anúncio")
            .setDescription(argsresult)
            .setColor("#77f50a")
            .setFooter(client.user.username + " » " + message.author.tag, client.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed)
            message.channel.send("@everyone").then(evr1 => evr1.delete())
        }
}
module.exports.config = {
    name: "anuncio",
    aliases: ["anunciar", "anúncio"]
   }