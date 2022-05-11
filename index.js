const Discord = require('discord.js-v11-stable');
const client = new Discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js-v11-stable');
const keepAlive = require("./server")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let lolcounter = [
  
]


function updateCounter() {
    lolcounter++
  }
   
  
client.on('message', msg => {
 //add role-delete
    if (msg.content.toLowerCase().startsWith('m:addrole')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    var role = msg.content.split(' ')
    var mod = '935262106041876550'  
    var jrmod = '961824021912105050'
    var event = '961824035199668244'
    var ver = '935258587486380083'
      if (Number.isInteger(Number(role[2])) === true){
      var adding = role[2]
      }else{
       switch (role[2]){
         case 'mod':
         var adding = mod
           break;
         case 'jrmod':
           var adding = jrmod
           break;
         case 'event':
           var adding = event
           break;
         case 'verified', 'ver':
           var adding = ver
           break;
       }
      }
   if (sender === true) {
       member.addRole(adding)
  .then(msg.channel.send(`Role added to '${member.id}(${member.user.tag})' `))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }


  if (msg.content.toLowerCase().startsWith('m:removerole')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    var role = msg.content.split(' ')
       var mod = '935262106041876550'  
    var jrmod = '961824021912105050'
    var event = '961824035199668244'
      if (Number.isInteger(Number(role[2])) === true){
      var adding = role[2]
      }else{
       switch (role[2]){
         case 'mod':
         var adding = mod
           break;
         case 'jrmod':
           var adding = jrmod
           break;
         case 'event':
           var adding = event
           break;
       }
      }
   if (sender === true) {
       member.removeRole(adding)
  .then(msg.channel.send(`Role removed from '${member.id}(${member.user.tag})'  !`))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }
//role ends
  
// lol counter(broken)
  if (msg.content.toLowerCase() === 'lol') {
    updateCounter()
  }
   
  
if (msg.content.toLowerCase() === 'm:lolcounter') {
    msg.channel.send(`Times 'lol' has been said in Moose Clothing Ltd. since May 7th: \n ${lolcounter} `)
  
  }
//lol counter ends
if (msg.content.toLowerCase() === 'm:befriend') {
  var writer = msg.author
  //msg.author.addFriend();
  msg.channel.send(' ```command disabled by owner. Reason: \ncrashes bot```');
  }

  
  if (msg.content.toLowerCase() === 'moose') {
    msg.channel.send('MOOSE!!!');
  }
  if (msg.content.toLowerCase() === 'moose cmds') {
    msg.channel.send('```Moose Bot COMMANDS: \nm:ping: bot replies with pong \nmoose: bot says moose \nm:joindate [mention a user]: replies with the day that user joined the server \nm:serverImage: Replies with the server\'s profile image \nm:pfp [mention a user]: Sends the mentioned user\'s pfp \n  \nCommands are not case-sensitive, More coming soon! \n \n \n \nSay "mod cmds" for commands made specially for mods!```');
  }
  if (msg.content.toLowerCase() === 'mod cmds') {
    msg.channel.send('```Mod Commands(Must have ADMINISTRATOR permission to use!): \nm:addrole [mention user] [role id]: adds the role to the mentioned user \nm:removerole [mention user] [role id]: opposite of the add~role command \nm:kick [mention user]: kicks the mentioned user from the server \nm:ban [mention user]: bans the mentioned user \n \nRole ID can be substituted for "mod", "jrmod", or "event" which will assign the mentioned user that role.```');
  }
    if (msg.content.toLowerCase() === 'm:ping') {
    msg.channel.send('pong');
  }
    if (msg.content.toLowerCase().startsWith('m:joindate')) {
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    var join2 = member.joinedAt
 
    msg.channel.send(`${member} joined the server: \n ${join2}`);
  }
  if (msg.content.toLowerCase().startsWith('m:pfp')) {
    const user = msg.mentions.users.first();
    const pfp = user.avatarURL
 
    msg.channel.send(`${pfp}`);
  }
  if (msg.content.toLowerCase() === 'm:serverimage') {
msg.channel.send(`https://cdn.discordapp.com/attachments/934607737403351079/941789526307799050/Discord_Group4.png`);
  }

  if (msg.content.toLowerCase() === 'm:rules') {
  const color = '483D8B'
  const embed = new RichEmbed()
  .setTitle('📙 **Rules for Moose Clothing LTD**')
  .setColor(color)
  .setDescription(rules);
    //change the string below into the variable embed when needed
      msg.channel.send('this command is currently disabled');
  }

if (msg.content.toLowerCase().startsWith('m:kick')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
   if (sender === true) {
       member.kick(`m:kick run by run by [${msg.member.nickname}]  !`)
  .then(msg.channel.send(`'${user.tag}'  has been kicked from the server!!! \n YEET! `))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }
if (msg.content.toLowerCase().startsWith('m:ban')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
   if (sender === true) {
       member.ban(`m:ban run by [${msg.member.nickname}]  !`)
  .then(msg.channel.send(`'${user.tag}'  has been banned from the server!!! \n YEET! `))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }
}); 





var rules = `***NO*** **advertising**
Please do not advertise in any channels except for #『🪐』advertisng


***NO*** **massive arguments**
Let's keep things civil, massive arguments are not allowed, minor arguments are fine but not too frequently.

***NO*** **NSFW content**
Please don't send anything NSFW because so we can keep this community safe for all. Anything of inappropriate nature will be deleted and will result in punishment.

**Use the correct channels**
Please don't use bots in general (unless it's relevant to the conversation) or spam in general. We have channels for that.( #『🪐』spam #『☁』bots 『🎙』music-cmds )

**Respect the Discord TOS**
Don't do anything that violates the Discord TOS as this risks getting your account deleted and ruins the experience for everyone else in the server.

***DO NOT*** **leak designs**
Leaking designs without permission from MerelyMoose#9833 may result in punishment.

*Now let's have fun and become a strong community dedicated to growth and innovation! Thanks for reading!* \n 
\n  

`




const mySecret = process.env['bed']
keepAlive()
client.login(mySecret);


