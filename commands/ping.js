const Discord = require('discord.js');

exports.run = async (client, message) => {

message.channel.send ("**Liste des commandes**\n\n__uptime__ : Affiche quelques information sur le bot\n__ping__: Affichde le ping du bot")
if (message.content === prefix + "ping") {
let ping_embed = new Discord.RichEmbed ()
.setColor('#333333')
.setTitle ("Ping")
.addField ('Pong! Mon ping est de', '***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓', true )
//).addField(" Ping local", '***' + Math.round(altair.ping) + " ms***", false )
.setTimestamp()
.setFooter(` Ping |`);
message.channel.send(ping_embed) ;
console.log (`${message.author.username} |ping `)

}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command, vous donne aussi votre ping.',
    usage: 'ping'
  };