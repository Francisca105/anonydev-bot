const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "canais",
        aliases: []
    },
    run: async (bot, message) => {
        let meuid = '290092310002270218'
        let eu = message.author.id
        let verificacao = '681906397319004213',
        importante = '681906399097389059',
        comunidade = '681906399948570729',
        clientes = '681906401395867649'
        if(eu !== meuid) return message.reply("Não podes executar este comando!")
        if(eu === meuid) {
        message.guild.createChannel('🔐▹verificação', { type: 'text'}).then(async c => c.setParent(verificacao)).then(
            message.guild.createChannel('comunicados', { type: 'text'}).then(async c => c.setParent(importante))
        ).then(
            message.guild.createChannel('promoções', { type: 'text'}).then(async c => c.setParent(importante))
        ).then(
            message.guild.createChannel('atualizações', { type: 'text'}).then(async c => c.setParent(importante))
        ).then(
            message.guild.createChannel('spoilers', { type: 'text'}).then(async c => c.setParent(importante))
        ).then(
            message.guild.createChannel('novos-plugins', { type: 'text'}).then(async c => c.setParent(importante))
        ).then(
            message.guild.createChannel('geral', { type: 'text'}).then(async c => c.setParent(comunidade))
        ).then(
            message.guild.createChannel('enquetes', { type: 'text'}).then(async c => c.setParent(comunidade))
        ).then(
            message.guild.createChannel('avaliações', { type: 'text'}).then(async c => c.setParent(comunidade))
        ).then(
            message.guild.createChannel('sugestões', { type: 'text'}).then(async c => c.setParent(comunidade))
        ).then(
            message.guild.createChannel('divulgação', { type: 'text'}).then(async c => c.setParent(clientes))
        ).then(
            message.guild.createChannel('geral', { type: 'text'}).then(async c => c.setParent(clientes))
        ).then(
            message.guild.createChannel('avisos', { type: 'text'}).then(async c => c.setParent(clientes))
        )






            .catch(console.error);
//message.guild.createChannel("nome", {tipe: "TEXT"}).then(async c => {c.setParent("ID DA CATEGORIA")})
    }
}
}