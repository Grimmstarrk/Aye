const settings = require("./settings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(settings.TOKEN);

bot.on('ready', function () { 
  console.log(`Online`); //Bot message saying "Online"\\
});

bot.on("guildMemberAdd", function(member) {
member.guild.channels.find("name", "home").send(member.toString() + " Welcome Ni:b::b:a "); //Welcome Message\\

       member.addRole(member.guild.roles.find("name", "Online")); //Auto Role\\
});


  
bot.on('guildMemberAdd', member => { //Join Log\\
let guild = member.guild; 
const user = member.user
const embed = new Discord.RichEmbed() 
.setAuthor(user.tag +" ("+ user.id +")", user.displayAvatarURL)
.setColor(0x96ff00)
.setFooter("User joined") 
.setTimestamp()               //log channel\\  
guild.channels.find("name", "security_cameras").send({embed});

});

bot.on('guildMemberRemove', member => { //Leave Log\\
  let guild = member.guild;
  const user = member.user
  const embed = new Discord.RichEmbed()
  .setAuthor(user.tag +" ("+ user.id +")", user.displayAvatarURL)
  .setColor(0xff1a00)
  .setFooter("User left")
  .setTimestamp()               //log channel\\
  guild.channels.find("name", "security_cameras").send({embed});

});


bot.on("message", function(msg) {
    if (msg.author.equals(bot.user)) return;
    if (!msg.content.startsWith(settings.PREFIX)) return;
    var args = msg.content.substring(settings.PREFIX.length).split(" ");
       

    switch (args[0].toLowerCase()) {
        case "ping": //Ping Command\\
             msg.channel.send(":ping_pong:"); 
             break;
        
        case "pong": //Pong Command\\
             msg.channel.send("Wait a minute... aren't I supposed to say that?!");
             break;
       


        case "lookatme": //Lookatme Command\\
            msg.channel.send("Fuck on me!");
             break;

             


    }   
});
             
