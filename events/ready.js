const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');
const settings = require('../config.json');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 client.user.setActivity(settings.prefix + `help | ${client.guilds.size} serveurs  | ${client.users.size} utilisateurs`,{type: "WATCHING"});
  //client.user.setAvatar("PdpPourLeBot");
  
}; 
