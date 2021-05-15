const Command = require('../../structures/Command');

module.exports = class Donate extends Command {
	constructor(client) {
		super(client, {
			name: 'donate',
			description: 'Sends a link to Meyoinao\'s patreon page.',
			aliases: [],
		});
	}
	async run(client, message) {
		return message.channel.send('Donate: https://donatebot.io/checkout/402408107851907073');
	}
};