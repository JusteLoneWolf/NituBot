const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json');
const fs = require('fs');

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


  var totalcmd =  Math.floor(files.length);
  console.log(`Il y a un total de ${totalcmd} commandes 👍.`);

  var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
  // client.on('debug', e => {
  //   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
  // });
  
  client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'qui a été expurgé')));
  });
  
  client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'qui a été expurgé')));
  });
  
  
  client.login(process.env.TOKEN);