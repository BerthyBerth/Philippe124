const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let prefix = "?";

client.login('NjA2MDQyOTQyODg0MjgyMzgx.XUFTvw.rf9JDeP7bxiIpdmT5qRltqOdjW8'); //Token du bot

var bot = new Discord.Client();

/*bot.on("ready", function() {
    bot.user.setGame("!help");
});

function sayHello() {
    guild.channel.get("605929017312411648").send("Allo");
}

//Commande pour savoir les règles
client.on('message', function(message) {
    if (message.content === "!rules" || message.content === "!règles" || message.content === "!regles") {
        message.channel.send("Les règles sont dans le channel " + message.guild.channels.get('605924077126942741').toString() + ".\t:wink:");
    }
});

//Message de bienvenue
client.on('guildMemberAdd', member => {
    member.guild.channels.get("606067217271881728").send(":tada: " + member.user + " a rejoint, nous somme à présent : " + member.guild.memberCount + " !");
});

client.on('message', function(message, sendMessage) {
    if (message.content === "!dev") {
        message.channel.bulkDelete(parseInt(1));
        message.author.send("Le développeur est RVG_Fenyco.\nSon discord est RVG_Fenyco#3066 pour le contacter.\n\nhttps://media.giphy.com/media/HverPyTQRZLaM/giphy.gif");
    }
});

//Message quand quelqu'un quitte le serveur Discord
client.on('guildMemberRemove', member => {
    member.guild.channels.get("606067217271881728").send(": tada: " + member.user + " a rejoint, nous somme à présent: " + member.guild.memberCount + "!");
});

client.on('message', message => {
    if (!message.guild) {
        return;
    }
    let args = message.content.trim().split(/ +/g);

    var count;

    if (args[0].toLocaleLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande");
        }

        let count = args[1];

        if (!count) {
            return message.channel.send("Veuillez indiquer un nombre de messages à supprimer");
        }
        if (isNaN(count)) {
            return message.channel.send("Veuillez indiquer un nombre valide");
        }
        if (count < 1 || count > 100) {
            return message.channel.send("Veuillez indiquer un nombre entre 1 et 100");
        }
        message.channel.bulkDelete(parseInt(count) + 1);
    }
});

client.on('message', message => {
    if (!message.guild) {
        return;
    }

    let args = message.content.trim().split(/ +/g);

    if (args[0].toLocaleLowerCase() === prefix + 'kick') {
        if (!message.member.permissions.hasPermission('KICK_MEMBERS')) {
            return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.");
        }

        let member = message.mentions.members.first();

        if (!member) {
            return message.channel.send("Veuillez mentionner un utilisateur. :x:");
        }
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) {
            return message.channel.send("Vous ne pouvez pas kick cet utilisateur.");
        }
        if (!member.kickable) {
            return message.channel.send("Je ne peux pas kick cet utilisateur :sunglass:");
        }

        member.kick();
        message.channel.send(member.user.username + ' a été exclu. :white_ckeck_mark:');
        console.log("Le joueur a été exclu.");
    }
});

//Projet de clock abandonné à refaire plus tard
/*client.on('message', function(message, sendMessage) {
    var intervalTimer = setInterval(function(message) {
        var channel = "605929017312411648";
        message.channel.send("605929017312411648");
    }, 1 * 1000);
}); */


return 0;
