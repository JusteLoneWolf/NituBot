const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));
		
	 	  if (afk[message.author.id]) {
			delete afk[message.author.id];
			  if (message.member.nickname === null) {
				message.channel.send("J'ai enlever votre afk");
			}else{
				message.channel.send("J'ai enlever votre afk ");
			}
			fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
			}else{
			        message.channel.send("Tu n'es pas afk");
			}
		}
    exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'remafk',
    description: "Vous vous enlevez votre afk." ,
    usage: "\n\nMerci de ne pas prendre en compte les [] ou <> lors de l'exécution de la commande \n\n&remafk." 
  };
