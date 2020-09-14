const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");

module.exports.run = async (bot, message, args, bdd) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send("Vous devez mentionner quelqu'un.");
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !");

  const embed = new MessageEmbed()
  .setAuthor(`${user.tag} (${user.id})`)
  .setColor("#ffa500")
  .setDescription(`**Action**: Kick\n**Raison**: ${reason}`)
  .setThumbnail(user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
  bot.channels.cache.get('IDDEVOTRESALONLOG').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;