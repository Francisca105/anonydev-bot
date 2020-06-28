const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {

const categoryId = "682292381835329536";
 
    if (message.channel.parentID == categoryId) {
         message.channel.delete();
     } else {
         message.reply("coloque este comando num canal de ticket.");
     }

}
 
module.exports.config = {
    name: "fechar",
    aliases: ["finalizar", "fecharticket", "ticketfechar"]
}