const Discord = require('discord.js');
const Client = new Discord.Client();
module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES'))  return message.reply("Não tens permissão para esse comando!")
  
  let membro = message.mentions.members.first();

      if(!membro) return message.reply('Para poder executar o comando tem que mencionar um membro!')

    let role = '681888222921490443'

  if(membro.roles.has(role)) return message.reply("O membro mencionado já possui esse cargo.")
  membro.addRole(role).then(
  message.reply(`Cargo \`cliente\` adicionado ao usuário com sucesso!`)
  )};
  module.exports.config = {
    name: "cliente",
    aliases: ["addcliente"]
   }