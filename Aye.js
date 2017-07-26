const settings = require("./settings.json");
    const Discord = require("discord.js");
        const bot = new Discord.Client();
            const ms = require("ms");
                bot.login(settings.TOKEN);

bot.on('ready', function () { 
    //bot.user.setGame('game title')
        console.log(`Online`); //Bot message saying "Online"
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "home").send(member.toString() + " Welcome Ni:b::b:a "); //Welcome Message
        member.addRole(member.guild.roles.find("name", "The Boys")); //Auto Role
});

bot.on('guildMemberAdd', member => { //Join Log
    let guild = member.guild; 
        const user = member.user
            const embed = new Discord.RichEmbed() 
                .setAuthor(user.tag +" ("+ user.id +")", user.displayAvatarURL)
                .setColor(0x96ff00)
                .setFooter("User joined" +" #"+ guild.memberCount) 
                .setTimestamp()               
            guild.channels.find("name", "security_cameras").send({embed});
});

bot.on('guildMemberRemove', member => { //Leave Log
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

    case "ping": msg.delete(); //Ping Command
        msg.channel.send(":ping_pong:"); 
        break;

    case "smug": msg.delete(); //Smug Command
        msg.channel.send("", {file: `./smug/smug${Math.round(Math.random() * 11)}.png`});
        break;

    case "wtf": msg.delete(); //Smug Command
        msg.channel.send("", {file: `./wtf/wtf${Math.round(Math.random() * 1)}.png`});
        break;

    case "wtf!": msg.delete(); //Smug Command
        msg.channel.send("", {file: `./wtf!/wtf!${Math.round(Math.random() * 1)}.png`});
        break;

    
    case "say": msg.delete(); { //Say Command
        if (args.length === 1) {
            msg.channel.send(" ```!say (messsage)``` ")
        } else {
            msg.channel.send(args.join(" ").substring(4))
    }       break;
}

    case 'purge': msg.delete() //Purge Command (2-100)
        if(!msg.member.permissions.has("MANAGE_MESSAGES")) return msg.reply("you're not a Mod bud.")
            let messagecount = msg.content.split(" ")[1];
                msg.channel.fetchMessages({limit: messagecount}).then(mMessages => msg.channel.bulkDelete(mMessages));
                break; 

    case "mute": //Mute Command
        if(!msg.member.permissions.has("MANAGE_MESSAGES")) return;
        let member = msg.mentions.members.first()
        if(!member) return msg.reply("you havem't mentioned a user!")
        let muteRole = msg.guild.roles.find("name", "Muted")
        if(!muteRole) return msg.reply("you're not a mod.")
        let params = msg.content.split(" ").slice(1)
        let time = params[1]
        if(!time) return msg.reply("there is no time specified.")          
        member.addRole(muteRole.id);
        msg.channel.send(`you've been muted for ${ms(ms(time), {long: true})}`);
        setTimeout(function() {
        member.removeRole(muteRole.id);
        msg.channel.send(`you've been unmuted! muted time: ${ms(ms(time), {long: true})}`)
        }, ms(time));
        break;

    case "laws": //Laws Command
        var embed = new Discord.RichEmbed()
            .setThumbnail(msg.guild.iconURL)
            .addField("Law 1", "No Advertising! Do not join the server to promote your content.")
            .addField("Law 2", "No spamming or flooding the chat with messages.")
            .addField("Law 3", "No annoying, loud or high pitch noises in Voice Chat.")
            .addField("Law 4", "Refrain from speaking in the wrong chats.")
            .addField("Law 5", "No adult (18+), Hentai, Explicit messages.(Ask to join the NFSW Channel, we got it)")
            .setFooter("These laws are subject to change. We'll change them up if the situation requires it so please check back occasionally.")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "law1": //Law1 Command
        var embed = new Discord.RichEmbed()
            .addField("Law 1", "No Advertising! Do not join the server to promote your content.")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "law2": //Law2 Command
        var embed = new Discord.RichEmbed()
            .addField("Law 2", "No spamming or flooding the chat with messages.")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "law3": //Law4 Command
        var embed = new Discord.RichEmbed()
            .addField("Law 3", "No annoying, loud or high pitch noises in Voice Chat.")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "law4": //Law4 Command
        var embed = new Discord.RichEmbed()
            .addField("Law 4", "Refrain from speaking in the wrong chats.")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "law5": //Law5 Command
        var embed = new Discord.RichEmbed()
            .addField("Law 5", "No adult (18+), Hentai, Explicit messages.(Ask to join the NFSW Channel, we got it)")
            .setColor("#02ff9a")
        msg.channel.send({embed})
        break;

    case "server": //Server Command
        var embed = new Discord.RichEmbed()          
            .setThumbnail(msg.guild.iconURL)
            .setTitle("» Server info")
            .setDescription("➽**Total members**:" +" "+ msg.guild.members.size + "\n➽**Server region**:" +" "+ msg.guild.region + "\n➽**Server owner**:" +" "+ msg.guild.owner.user.tag)
            .setColor("#e8f441")
        msg.channel.send({embed})
        break;           

    case "stats": //Stats Command
        var pms = require("pretty-ms");      
            var embed = new Discord.RichEmbed()
                .setThumbnail(bot.user.avatarURL)
                .setTitle("» Aye's Info")    
                .setDescription(`➽**Total guilds**: ${bot.guilds.size}\n➽**Total users**: ${bot.users.size}\n➽**Total channels**: ${bot.channels.size}\n➽**Gender**: Fighter jet\n➽**Up time**:` +" "+ pms(bot.uptime, {verbose: true}))
                .setColor("#e8f441")
            msg.channel.send({embed})
            break;

    case "help": //Server Command
        var embed = new Discord.RichEmbed()          
            .setTitle("» Commands")
            .setDescription("**Ping**: Pings the bot\n**Pong**: Pongs the bot\n**Server**: Shows server information\n**Stats**: Shows Aye's information\n**Say** *(message)*: Makes the bot say the message\n**Smug**: Posts a random smug anime face\n**Wtf**: Posts a random shocked wtf anime face\n**Wtf!**: Posts a random even more shocked wtf anime face\n**Laws**: Posts server laws\n---------------------\n**Mods Commands**\n**Purge** (2-100): Deletes messages in bulk")
            .setColor("#00ffd9")
        msg.channel.send({embed})
        break;
      }   
});
