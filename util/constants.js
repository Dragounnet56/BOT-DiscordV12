const MESSAGES = {
    COMMANDS: {
        HELP: {
            HELP: {
                name: 'help',
                aliases: ["helps"],
                category: "help",
                description: "Renvoie une liste de commandes ou les informations d'une commande.",
                cooldown: 3,
                usage: "<nom_d'une commande>",
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
                cooldown: 10,
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
                cooldown: 5,
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
            }   
        }
    }
};

exports.MESSAGES = MESSAGES;