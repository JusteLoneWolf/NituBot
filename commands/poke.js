const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let defineduser = message.mentions.users.first();
	const test = message.content.split(" ").slice(1).join(" ");

	let user = message.author
   let pokeraison = test.slice(23);
    if (!test[0]) {return message.channel.send (`Veuillez spécifiez un utilisateur .`)
    }else if (!pokeraison[0]) {
let Embed = new Discord.RichEmbed()
    .setTitle('Poke')
    .addField('Tu as était appelé .', `Par: ${user}\nDans: ${message.guild.name}\nAu salon: <#${message.channel.id}>\nRaison: Aucune raison spécifier `, true)
    .setColor("#AB49CD")
    defineduser.send(Embed)
	    message.author.send(`Votre poke à bel est bien était envoyé à ${defineduser.username}. `) 
 
		  }else{

            let Embed = new Discord.RichEmbed()
    .setTitle('Poke')
    .addField('Tu as était appelé .', `Par: ${user}\nDans: ${message.guild.name}\nAu salon: <#${message.channel.id}>\nRaison: ${pokeraison} `, true)
    .setColor("#AB49CD")
    defineduser.send(Embed)
			  message.author.send(`Votre poke à bel est bien était envoyé à ${defineduser.username} avec la raison **${pokeraison}**. `) 
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
