const settings = require("./settings.json");
      const Discord = require("discord.js");
            const bot = new Discord.Client();
                  bot.login(settings.TOKEN);

                  bot.on('ready', function () { 
                   //bot.user.setGame('game title')\\
                  console.log(`Online`); //Bot message saying "Online"\\
});






bot.on("message", function(msg) {
      if (msg.author.equals(bot.user)) return;
            if (!msg.content.startsWith(settings.PREFIX)) return;
                  var args = msg.content.substring(settings.PREFIX.length).split(" ");




      
switch (args[0].toLowerCase()) {

      case 'purge': msg.delete()
            let messagecount = msg.content.split(" ")[1];
                  msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages));
                  break;
  
        
      
      // case "mute":
       //var member = member.guild
          //  let modsRole = msg.guild.roles.find("name", "Mod");
           // if(!msg.member.roles.has(modsRole.id)) {
               // return msg.channel.send('You are not a staff Member.');
           // }
           // if(msg.mentions.users.size === 0) {
              //     return msg.channel.send("Please mention a user to mute");
           // }
          //  let muteMember = msg.guild.member(msg.mentions.users.first());
          //  if(!muteMember) {
          //       return msg.channel.send("That user does not seem valid");
         //   }
          //  if (!msg.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
         //       return msg.channel.send("I don't have permission to perform this command");
         //   }
         //   member.addRole(member.guild.roles.find("name", "Muted")).then(member => {
        //    msg.channel.send(`${member.user.username} was successfully muted. `)});
        //        break;







      }   
});



