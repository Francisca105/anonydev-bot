module.exports = async (bot, dados) => {
    //Sistema de cargos por reação
    let id = '' //id do carbo ""
        if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
        if(dados.d.message_id != "681908057667666057") return
      
        let servidor = bot.guilds.get("681884955064008758")
        let membro = servidor.members.get(dados.d.user_id)
      
        let verificar = servidor.roles.get('681886356360003615')

      
        if(dados.t === "MESSAGE_REACTION_ADD"){
            if(dados.d.emoji.id === "681908006174326806"){
                if(membro.roles.has(verificar)) return
                membro.addRole(verificar)
            }
        }
    }