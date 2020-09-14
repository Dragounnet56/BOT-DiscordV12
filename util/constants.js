const MESSAGES = {
    COMMANDS: {
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
        HELP: {
            HELP: {
                name: 'help',
                aliases: ["helps"],
                category: "help",
                description: "Renvoie une liste de commandes ou les informations d'une commande.",
                cooldown: 10,
                usage: "<nom_d'une commande>",
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        }
    }
};

exports.MESSAGES = MESSAGES;