const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    const categoryId = "682292381835329536";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
    var bool = false;

    message.guild.channels.forEach((channel) => {
        if (channel.name == "ticket" + "-" + userDiscriminator) {
            message.reply("já crias-te um ticket!");
            bool = true;
        }
 
    });
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Ticket")
        .setFooter("Canal de suporte criado com sucesso!");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel("ticket" + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => { 

            settedParent.overwritePermissions(message.guild.roles.find('name', "[⚡] SUPORTE(S)"), { "READ_MESSAGES": true });
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Olá, " + userName + "!")
                .setDescription("Coloque aqui a sua dúvida e aguarde pela resposta de um staff.");

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Algo deu errado.");
            console.log(err)
        });
 
    }).catch(err => {
        message.channel.send("Algo deu errado.");
        console.log(err)
    });
 
}
 
module.exports.config = {
    name: "ticket",
    aliases: []
}