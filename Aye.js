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
             
