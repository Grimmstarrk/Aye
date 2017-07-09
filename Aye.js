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

        case "rules": //Rules Command\\
            var embed = new Discord.RichEmbed()
                 .setThumbnail("https://cdn.discordapp.com/attachments/277917366619471883/331539237105041410/image.png")
                 .addField("Rule 1", "No Advertising! Do not join the server to promote your content.")
                 .addField("Rule 2", "No spamming or flooding the chat with messages.")
                 .addField("Rule 3", "No annoying, loud or high pitch noises in Voice Chat.")
                 .addField("Rule 4", "Refrain from speaking in the wrong chats.")
                 .addField("Rule 5", "No adult (18+), Hentai, explicit, messages.(Ask to join the NFSW Channel, we got it)")
                 .addField("Rule 6", "@Support tag can be used for questions/tech support")
                 .setFooter("These rules are subject to change. We'll change them up if the situation requires it so please check back occasionally.")
                 .setColor(0x02ff9a)
             msg.channel.send({embed:embed})
             break;

        case "rule1": //Rule1 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 1", "No Advertising! Do not join the server to promote your content.")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;

        case "rule2": //Rule2 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 2", "No spamming or flooding the chat with messages.")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;

        case "rule3": //Rule4 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 3", "No annoying, loud or high pitch noises in Voice Chat.")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;

        case "rule4": //Rule4 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 4", "Refrain from speaking in the wrong chats.")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;

        case "rule5": //Rule5 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 5", "No adult (18+), Hentai, explicit, messages.(Ask to join the NFSW Channel, we got it)")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;

        case "rule6"://Rule6 Command\\
             var embed = new Discord.RichEmbed()
                 .addField("Rule 6", "@Support tag can be used for questions/tech support")
                 .setColor(0x02ff9a)
                 msg.channel.send({embed:embed})
                 break;
    }   
});
             
