const MESSAGES = {
    COMMANDS: {
        HELP: {
            HELP: {
                name: 'help',
                aliases: ["helps"],
                category: "help",
                description: "Renvoie une liste de commandes ou les informations d'une commande.",
                cooldown: 3,
                usage: "<nom_d'une_commande>",
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        MISC: {
            SAY: {
                name: 'say',
                aliases: ["says", "repeart", "rep"],
                category: "misc",
                description: "Permet de faire parler le bot",
                cooldown: 3,
                usage: "<votre_message>",
                isUserAdmin: false,
                permissions: false,
                args: true
            }
        },
        MODERATION: {
            KICK: {
                name: 'kick',
                aliases: ["kicks"],
                category: "moderation",
                description: "Permet de kick un utilisateur.",
                cooldown: 3,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            BAN: {
                name: 'ban',
                aliases: ["bans"],
                category: "moderation",
                description: "Permet de ban un utilisateur.",
                cooldown: 3,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            UNBAN: {
                name: 'unban',
                aliases: ["unbans"],
                category: "moderation",
                description: "Permet d'unban un utilisateur.",
                cooldown: 3,
                usage: '<user_id>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            CLEAR: {
                name: 'clear',
                aliases: ["clears", "purge", "purges"],
                category: "moderation",
                description: "Supprime un nombre de message spécifié.",
                cooldown: 3,
                usage: '<nombre_de_message>',
                isUserAdmin: false,
                permissions: true,
                args: true
            }
        },
        INFO: {
            BOTINFO: {
                name: 'infobot',
                aliases: ["infobots", "botinfo", "botinfos"],
                category: "info",
                description: "Permet d'avoir les informations du BOT.",
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        }
    }
};

exports.MESSAGES = MESSAGES;