const settings = require("./settings.json");
      const Discord = require("discord.js");
            const bot = new Discord.Client();
                  bot.login(settings.TOKEN);

                  bot.on('ready', function () { 
                   //bot.user.setGame('game title')\\
                  console.log(`Online`); //Bot message saying "Online"\\
});

bot.on("guildMemberAdd", function(member) {
      member.guild.channels.find("name", "home").send(member.toString() + " Welcome Ni:b::b:a "); //Welcome Message\\
            member.addRole(member.guild.roles.find("name", "The Boys")); //Auto Role\\
});

bot.on('guildMemberAdd', member => { //Join Log\\
      let guild = member.guild; 
            const user = member.user
                  const embed = new Discord.RichEmbed() 
                  .setAuthor(user.tag +" ("+ user.id +")", user.displayAvatarURL)
                  .setColor(0x96ff00)
                  .setFooter("User joined" +" #"+ guild.memberCount) 
                  .setTimestamp()               
                  guild.channels.find("name", "security_cameras").send({embed});
});

bot.on('guildMemberRemove', member => { //Leave Log\\
      let guild = member.guild;
            const user = member.user
                  const embed = new Discord.RichEmbed()
                  .setAuthor(user.tag +" ("+ user.id +")", user.displayAvatarURL)
                  .setColor(0xff1a00)
                  .setFooter("User left" +" #"+ guild.memberCount)
                  .setTimestamp()               
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
    
      case "help": //Help Command\\
            msg.channel.send("yea i still need to make that....")
            break;

      case "say": msg.delete(); { //Say Command\\
            if (args.length === 1) {
                  msg.channel.send("you're doing it wrong") 
      } else {
                  msg.channel.send(args.join(" ").substring(4))
   }              break;
                  
}             
         

      case "laws": //Laws Command\\
            var embed = new Discord.RichEmbed()
                  .setThumbnail(msg.guild.iconURL)
                  .addField("Law 1", "No Advertising! Do not join the server to promote your content.")
                  .addField("Law 2", "No spamming or flooding the chat with messages.")
                  .addField("Law 3", "No annoying, loud or high pitch noises in Voice Chat.")
                  .addField("Law 4", "Refrain from speaking in the wrong chats.")
                  .addField("Law 5", "No adult (18+), Hentai, explicit, messages.(Ask to join the NFSW Channel, we got it)")
                  .addField("Law 6", "@Support tag can be used for questions/tech support")
                  .setFooter("These laws are subject to change. We'll change them up if the situation requires it so please check back occasionally.")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law1": //Law1 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 1", "No Advertising! Do not join the server to promote your content.")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law2": //Law2 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 2", "No spamming or flooding the chat with messages.")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law3": //Law4 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 3", "No annoying, loud or high pitch noises in Voice Chat.")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law4": //Law4 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 4", "Refrain from speaking in the wrong chats.")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law5": //Law5 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 5", "No adult (18+), Hentai, explicit, messages.(Ask to join the NFSW Channel, we got it)")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;

      case "law6"://Law6 Command\\
            var embed = new Discord.RichEmbed()
                  .addField("Law 6", "@Support tag can be used for questions/tech support")
                  .setColor(0x02ff9a)
            msg.channel.send({embed})
            break;
        
      case "server": //Server Command\\
            var embed = new Discord.RichEmbed()          
                  .setThumbnail(msg.guild.iconURL)
                  .setTitle("» Server info")
                  .setDescription("➽**Total members**:" +" "+ msg.guild.memberCount + "\n➽**Server region**:" +" "+ msg.guild.region + "\n➽**Server owner**:" +" "+ msg.guild.owner.user.tag)
                  .setColor("#e8f441")
            msg.channel.send({embed})
            break;           

      case "stats": //Stats Command\\
            var pms = require("pretty-ms");
                  var ms = require("ms")      
                        var embed = new Discord.RichEmbed()
                        .setThumbnail(bot.user.avatarURL)
                        .setTitle("» Aye's Info")    
                        .setDescription(`➽**Total guilds**: ${bot.guilds.size}\n➽**Total users**: ${bot.users.size}\n➽**Total channels**: ${bot.channels.size}\n➽**Gender**: Fighter jet\n➽**Up time**:` +" "+ pms(bot.uptime, {verbose: true}))
                        .setColor("#e8f441")
            msg.channel.send({embed})
            break;
      }   
});
