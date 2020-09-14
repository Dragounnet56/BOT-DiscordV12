const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");
const { PREFIX } = require('../../config/config.js');
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (bot, message, args) => {
  if (!args.length) {
    const embed = new MessageEmbed()
    .setColor("#36393F")
    .addField("Liste des commandes", `Une liste de toute les sous-catégories disponibles et leurs commande.\nPour plus d'informations sur une commande, tapez ${PREFIX}help <nom_d'une_commande>`)

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${bot.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    return message.channel.send(embed);
  } else {
    const command = bot.commands.get(args[0]) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("cet commande n'existe pas !");

    const embed = new MessageEmbed()
    .setColor("#36393F")
    .setTitle(`${command.help.name}`)
    .addField("Description", `${command.help.description} (Cooldown: ${command.help.cooldown} seconde(s))`)
    .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.HELP.HELP;