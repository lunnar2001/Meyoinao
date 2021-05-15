const Command = require('../../structures/Command');

module.exports = class Review extends Command {
	constructor(client) {
		super(client, {
			name: 'review',
			description: 'Review link.',
		});
	}
	async run(client, message) {
		return message.channel.send('https://top.gg/bot/740108641054621696');
	}
};