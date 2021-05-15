const Sentry = require('@sentry/node');

const yoi = require('./structures/Client');
const client = new yoi(process.env.DISCORD_TOKEN);
client.login();

Sentry.init({
	dsn: process.env.SENTRY_URL,
	environment: process.env.SENTRY_ENVIRONMENT,
});

['commands', 'events'].forEach(handler => require(`./handlers/${handler}`)(client));