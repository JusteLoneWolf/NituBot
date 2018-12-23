const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json');
const fs = require('fs');
const chalk = require('chalk');
require('./util/eventLoader')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} commandes,`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.elevation = message => {

  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};

  var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

  
  client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'qui a été expurgé')));
  });
  
  client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'qui a été expurgé')));
  });
  
  
  client.login(process.env.TOKEN);
