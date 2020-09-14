module.exports = bot => {
    console.log(`Bot ${bot.user.tag} démarré, avec ${bot.users.cache.size} utilisateurs, dans ${bot.guilds.cache.size} discords avec ${bot.channels.cache.size} channels en tout.`);
    bot.user.setActivity(`${bot.guilds.cache.size} serveur(s) / ${bot.users.cache.size} utilisateur(s)`);
};