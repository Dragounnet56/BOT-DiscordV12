const { MESSAGES } = require("../../util/constants.js");

module.exports.run = (bot, message, args) => {
	message.delete();
	message.channel.send(args.join(" "));
};

module.exports.help = MESSAGES.COMMANDS.MISC.SAY;