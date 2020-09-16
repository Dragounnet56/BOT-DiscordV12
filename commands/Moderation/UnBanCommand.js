const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");

module.exports.run = async (bot, message, args, bdd) => {
  let user = await bot.users.fetch(args[0]);
  if (!user) return message.channel.send("L'utilisateur n'existe pas !");
  message.guild.members.unban(user);

  const embed = new MessageEmbed()
  .setAuthor(`${user.tag} (${user.id})`, user.avatarURL())
  .setColor("#35f092")
  .setDescription(`**Action**: UnBan`)
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
  bot.channels.cache.get('IDDEVOTRESALONLOG').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;