const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "categorias",
        aliases: []
    },
    run: async (bot, message, err) => {
      let meuid = '290092310002270218'
      let eu = message.author.id
      if(eu !== meuid) return message.reply("Não podes executar este comando!")

      if(eu === meuid) {
        message.guild.createChannel('VERIFICAÇÃO', {
            type: 'category',
            permissionOverwrites: [{
              id: message.guild.id,
              deny: ['READ_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
              allow: []
            }]
          }).then(
            message.guild.createChannel('IMPORTANTE', {
              type: 'category',
              permissionOverwrites: [{
                id: message.guild.id,
                deny: ['READ_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                allow: []
              }]
            })
          ).then(
            message.guild.createChannel('COMUNIDADE', {
              type: 'category',
              permissionOverwrites: [{
                id: message.guild.id,
                deny: ['READ_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                allow: []
              }]
            })
          ).then(
            message.guild.createChannel('ÁREA DOS CLIENTES', {
              type: 'category',
              permissionOverwrites: [{
                id: message.guild.id,
                deny: ['READ_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                allow: []
              }]
            })
          ).catch(console.error);
          if(err) console.log(err)
          }
    }
}