const Database = require("@replit/database")

const Discord = require('discord.js-v11-stable');
const client = new Discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js-v11-stable');
const keepAlive = require("./server")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const db = new Database()
//contains username+roles of muted people
var mutedUsers = [
  
]

db.get("mutes").then(mutes => {
  if (!mutes){
db.set("mutes", mutedUsers)
  }
});

function updateMutes(roleUsers){
  
db.get("mutes").then(mutes => {
  mutes.push([roleUsers])
  db.set("mutes", mutedUsers)
});
}

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
   if (msg.content.split(" ")[1] === 'RUINED') {
    var number = msg.content.split(" ")[4]
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    const channel = member.guild.channels.find(ch => ch.name === '『🪐』counting-shame');
    channel.send(`@${member.nickname} WTH MAN!!!??? WHY YOU GOTTA MESS IT UP! WE WERE AT ${number}!!`)
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
  if (msg.content.toLowerCase().startsWith('m:say')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    var ab = msg.content.toLowerCase().replace("m:say", "");
     if (sender === true) {
    msg.delete()  .then(msg.channel.send(`${ab}`));
     }else{
  msg.delete()
  .then(msg.channel.send(`MESSAGE FROM ${msg.member.user.tag}// ${ab}`));
   }
  }


  if (msg.content.toLowerCase().startsWith('m:warn')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
     if (sender === true) {
    switch (member.highestRole.id) {
      case '974077286309572639':
      member.removeRole('974077286309572639')
      member.removeRole('935258587486380083')
      member.addRole('935310953342447616')
      msg.reply("User has been muted! Please unmute them once through the 'm:unmute [mention user]' command once they have learned their lesson!")
      break;
      case '974077282488569906':
      member.addRole('974077286309572639')
      member.removeRole("974077282488569906")
      msg.channel.send(`${member.user.tag} has been warned! (User has 3 warn(s) in total)`)
      break;
      case '974077137214648351':
      member.addRole("974077282488569906")
      member.removeRole("974077137214648351")
      msg.channel.send(`${member.user.tag} has been warned! (User has 2 warn(s) in total)`)
      break;
      default:
      member.addRole("974077137214648351")
      msg.channel.send(`${member.user.tag} has been warned! (User has 1 warn(s) in total)`)
    }
   }else{
  msg.reply('You don\'t have the perms, loser')
   }
      }
  if (msg.content.toLowerCase().startsWith('m:mute')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
   if (sender === true) {
   member.addRole('935310953342447616')
   member.removeRole('935258587486380083')
  .then(msg.channel.send(`'${user.tag}'  has been muted! `))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }
if (msg.content.toLowerCase().startsWith('m:unmute')) {
    var sender = msg.member.hasPermission('ADMINISTRATOR')
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
   if (sender === true) {
   member.removeRole('935310953342447616')
   member.addRole('935258587486380083')
  .then(msg.channel.send(`'${user.tag}'  has been unmuted! `))
  .catch(console.error);

   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }
  
  if (msg.content.toLowerCase() === 'moose') {
    msg.channel.send('MOOSE!!!');
  }
  if (msg.content.toLowerCase() === 'moose cmds') {
    msg.channel.send('```Moose Bot COMMANDS: \nm:ping: bot replies with pong \nmoose: bot says moose \nm:say [message to send in chat]: makes moose bot say whatever you want!  \nm:joindate [mention a user]: replies with the day that user joined the server \nm:serverImage: Replies with the server\'s profile image \nm:pfp [mention a user]: Sends the mentioned user\'s pfp \n  \nCommands are not case-sensitive, More coming soon! \n \n \n \nSay "mod cmds" for commands made specially for mods!```');
  }
  if (msg.content.toLowerCase() === 'mod cmds') {
    msg.channel.send('```Mod Commands(Must have ADMINISTRATOR permission to use!): \nm:addrole [mention user] [role id]: adds the role to the mentioned user \nm:removerole [mention user] [role id]: opposite of the add~role command \nm:mute [mention user]: mutes the user(currently permissions broken) \nm:unmute [mention user]: opposite of m:mute \nm:kick [mention user]: kicks the mentioned user from the server \nm:ban [mention user]: bans the mentioned user \n \nRole ID can be substituted for "mod", "verified", "jrmod", or "event" which will assign the mentioned user that role.```');
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




const mySecret = process.env['botkey']
keepAlive()
client.login(mySecret);


