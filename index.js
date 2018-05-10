const Discord = require('discord.js')
const bot = new Discord.Client()

let prefix = "&"

bot.on('ready',function() {

        bot.user.setStatus( 'Away' );
        //bot.user.setActivity(prefix + `help | ${bot.guilds.size} serveurs  | ${bot.users.size} utilisateurs`,{type: "WATCHING"});
        bot.user.setActivity("En maintenance")

  console.log("Je suis connecté !\n====================================\n\n" + bot.users.size + " utilisateurs \n" + bot.guilds.size + " serveurs \n\n====================================\n\n" + bot.guilds.array ())
})
bot.on("message", message => {
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
let defineduser = message.mentions.users.first();
  
  	if (message.content === prefix +  "uptime") {
	    let ms = bot.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** jour');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** jours');
    }

    if (hours === 1) {
        dateStrings.push('**1** heure' );
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** heures');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** seconde');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** secondes');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'et ';
    }

    dateString += dateStrings[dateStrings.length - 1];

    const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(message.author.iconURL)
  .addField(':clock: Actif ', 'Le bot est actif', false )
  .addField(':white_check_mark: Bot actif depuis :', dateString, false )
  .addField ('📈 Utilisation mémoire' , `${Math.round(used * 100) / 100} MB/500MB`, false)
   .addField(':runner: Serveur disponible :', `**${bot.guilds.size}** servers`, false )
  .addField ('👥 Utilisateur:', ` ${bot.users.size} utilisateurs`, false)
  .addField ('🏓 Ping :', `${Date.now() - message.createdTimestamp} ms`, false)
  .setColor(6583245);
    message.channel.send({embed})
  .catch(console.error);
}
  if (message.content === prefix +  "help") {
	   let help = new Discord.RichEmbed()
  		.setTimestamp()
  		.setThumbnail(message.author.iconURL)
	  	 .setTitle("Voici la liste des commandes")
  		.setDescription( `Le prefix est ${prefix}`)
  		.addField(':clock: Actif ', '`ping`,`uptime`,`help`', false )
    message.channel.send (help)
  }
	 if (message.content === prefix +`botinfo`){
	   let ms = bot.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** jour');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** jours');
    }

    if (hours === 1) {
        dateStrings.push('**1** heure' );
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** heures');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** seconde');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** secondes');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'et ';
    }

    dateString += dateStrings[dateStrings.length - 1];
  	  	 let bicon = bot.user.displayAvatarURL;
  	  	 let botembed = new Discord.RichEmbed()
  	  	 .setTitle("Information sur le bot")
  	  	 .setColor("#15f153")
  	  	 .setThumbnail(bicon)
  	  	 .addField("Nom du bot", bot.user.username, false)
  	  	 .addField("Date de création",`${bot.user.createdAt}`, false )
  	  	 .addField ('Utilisation mémoire' , `${Math.round(used * 100) / 100} MB/500MB`, false)
                .addField ('Version du bot', 'Alpha 1.0.0',false)
                 .addField ('Librairie', 'Discord.js', false)
		 .addField ("ID du bot ", bot.user.id,false )
  	  	 .addField ("Créateur du bot", "[BCFB] zechaos et 𝓚𝓪𝔀𝓪𝓲𝓲 𝓐𝓵𝓮𝔁 𝓯𝓪𝓷𝓽𝓪𝓼𝓼𝓲𝓷 𝓭'𝓤𝓷𝓲𝓸𝓷#5682", false)
  	  	 .addField ("Données serveur", bot.guilds.size, false)
  	  	 .addField ("Données utilisateurs", bot.users.size, false)
  	  	  .addField ("Langage de programmation", "JavaScript", false)
         .setTimestamp()
         .setFooter(`${message.author.username} | Bot Info`);
  	  	 return message.channel.send(botembed);
  	  	 console.log(`${message.author.username} | Bot Info`)
}
       if (message.content === prefix + "ping") {
   let ping_embed = new Discord.RichEmbed ()
       .setColor('#333333')
       .setTitle ("Ping")
       .addField ('Pong! Mon ping est de', '***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓', true )
       .setTimestamp()
       .setFooter(` Ping |`);
    message.channel.send(ping_embed) ;
    console.log (`${message.author.username} |ping `)
       }
})
bot.login (process.env.TOKEN)
