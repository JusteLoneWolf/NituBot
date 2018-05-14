const { Command } = require('discord.js-commando');
const choix = ['pierre', 'papier', 'ciseaux'];

exports.run = (client, message, args) => {
	const choixjoueur = args.join(" ") 
	if (!choixjoueur[0]) {
		message.channel.send('Merci de préciser votre choix : pierre, feuilles, ciseaux ');
}

	if (message, { choixjoueur }) {
		const choixbot = choix[Math.floor(Math.random() * choix.length)];
		const botgagnant = `J'ai gagné, j'ai choisi ${choixbot}!`;
		const joueurgagnant = `Tu as gagné la parti ! j'ai  choisie ${choixbot}!`;
		const égalite = `Égalité ! J'ai choisi ${choixbot}!`;

		switch (choixjoueur) {
			case 'pierre':
				switch (choixbot) {
		 	  	case 'pierre':
						message.channel.send(égalite);
						break;
					case 'papier':
						message.channel.send(botgagnant);
						break;
					case 'ciseaux':
						message.channel.send(joueurgagnant);
						break;
				}
				break;
			case 'papier':
				switch (choixbot) {
					case 'pierre':
						message.channel.send(joueurgagnant);
						break;
					case 'papier':
						message.channel.send(égalite);
						break;
					case 'ciseaux':
		  			message.channel.send(botgagnant);
						break;
				}
				break;
			case 'ciseaux':
				switch (choixbot) {
					case 'pierre':
						message.channel.send(botgagnant);
						break;
					case 'papier':
						message.channel.send(joueurgagnant);
						break;
					case 'ciseaux':
						message.channel.send(égalite);
						break;
				}
				break;
			default:
				
		}

	}

};

exports.conf = { 
	enabled: true, 
	guildOnly: false, 
	aliases: ['rps'], 
	permLevel: 0
}; 
exports.help = {
	 name: 'rps', 
	 description: 'Fait un pierre feuille ciseau avec le bot ', 
	 usage: 'rps <pierre,feuilles,ciseaux> '
	};
