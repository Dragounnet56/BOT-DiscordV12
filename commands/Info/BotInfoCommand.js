const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");
var os = require('os');
const ms = require('ms');

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
  .setColor(0xe43333)
  .setAuthor(`Bot statistics`,  bot.user.displayAvatarURL())
  .setURL(`https://discord.com/oauth2/authorize?bot_id=IDDEVOTREBOT&scope=bot&permissions=305655007`)
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
  .addField('**》 Membres:**', `\`${bot.users.cache.size}\``, true)
  .addField('**》 Guilds:**', `\`${bot.guilds.cache.size}\``, true)
  .addField('**》 Salons:**', `\`${bot.channels.cache.size}\``, true)
  .addField('**》 Uptime:**', `\`${ms(bot.uptime)}\``, true)
  .addField("**》 Discord.js:**", `\`v${Discord.version}\``, true)
  .addField('**》 Node:**', `\`${process.version}\``, true)
  .addField("**》 CPU & CPU Usage:**", `\`${(os.loadavg()[0]*os.cpus().length/100).toFixed(2)}%\``, true)
  .addField("**》 RAM:**", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
  .addField('**》 Platform:**', `\`${process.platform}\``, true)
  .addField('**》 Processeur:**', `\`(${os.arch()}) ${os.cpus()[0].model}\``)
  .addField('**》 Invitation du BOT:**', `[Invite du BOT](https://discord.com/oauth2/authorize?bot_id=IDDEVOTREBOT&scope=bot&permissions=305655007)`, true)
  .addField('**》 Support du BOT:**', '[Support du BOT](SUPPORTDEVOTREBOT)', true)
  message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.INFO.BOTINFO;