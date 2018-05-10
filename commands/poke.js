const Discord = require('discord.js');

exports.run = async (client, message, args) => {

	let user = message.author
   let pokeraison = args.slice(23);

    if (!args[0]) {return message.channel.send (`Veuillez spécifiez un utilisateur .`)
    }else if (!pokeraison[0]) {return message.channel.send (`Veuillez mettre une raison à votre poke.`)

		  }else{

            let Embed = new Discord.RichEmbed()
    .setTitle('Poke')
    .addField('Tu as était appelé .', `Par: ${user}\nDans: ${message.guild.name}\nAu salon: <#${message.channel.id}>\nRaison: ${pokeraison} `, true)
    .setColor("#AB49CD")
    defineduser.send(Embed)
                  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'poke',
    description: "Poke l' utilisateur mentionné avec une raison ." ,
    usage: 'poke [mention] [raison] '
  };
