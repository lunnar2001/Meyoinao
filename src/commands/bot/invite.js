const Command = require('../../structures/Command');

module.exports = class Invite extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			description: 'Sends the invite link for the bot.',
			usage: '',
			enabled: true,
			cooldown: 5,
			args: false,
		});
	}
	async run(client, message) {
		message.channel.send('<https://top.gg/bot/740108641054621696>');
	}
};