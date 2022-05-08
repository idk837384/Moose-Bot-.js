const Discord = require('discord.js-v11-stable');
const client = new Discord.Client();
const { Client, Attachment, RichEmbed } = require('discord.js-v11-stable');
const keepAlive = require("./server")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'moose') {
    msg.channel.send('MOOSE!!');
  }
  if (msg.content.toLowerCase() === 'moose cmds') {
    msg.channel.send("```Moose Bot COMMANDS: \n m:ping: bot replies with pong \n moose: bot says moose \n m:joindate [mention a user]: replies with the day that user joined the server \n m:serverImage: Replies with the server's profile image \n m:pfp [mention a user]: Sends the mentioned user's pfp \n  \nCommands are not case-sensitive, More coming soon!```");
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
    const member = msg.guild.member(user);
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
}); 





var rules = `***NO*** **advertising**
Please do not advertise in any channels except for #『🪐』advertising


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

/*   WIP, add role command
   if (msg.content.toLowerCase().startsWith === 'm:addrole') {
   if (msg.author ) {
    msg.member.addRole('193654001089118208')
  .then(console.log)
  .catch(console.error);
   }else{
  msg.reply('You don\'t have the perms, loser')
   }
  }*/
const mySecret = process.env['TOKEN']
keepAlive()
client.login(mySecret);

