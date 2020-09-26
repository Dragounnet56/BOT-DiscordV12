const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");

module.exports.run = async (bot, message, args, bdd) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply("il faut spécifier un ***nombre*** entre 1 et 100.");

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#287db5")
  .setDescription(`**Action**: Purge\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
  .setTimestamp()
  bot.channels.cache.get('IDDEVOTRESALONLOG').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;