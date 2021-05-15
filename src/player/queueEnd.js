const Discord = require('discord.js');

module.exports = async (client, player) => {
	const embed = new Discord.MessageEmbed()
		.setDescription('Queue ended. Enjoying Meyoinao? Consider reviewing it **[here](https://top.gg/bot/740108641054621696)**.')
		.setColor(client.colors.main);
	player.textChannel.send(embed);
	return //player.destroy();
};