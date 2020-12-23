import 'dotenv/config';
import Discord, { Message } from 'discord.js';
import { CommandHandler } from './commandHandler';
import { Config } from './config/';

// types
import { botConfig } from './types/bot-config';

/** Pre-startup validation of the bot config. */
function validateConfig(botConf: botConfig) {
  if (!Config.token) {
    throw new Error('You need to specify your Discord bot token!');
  }
}

validateConfig(Config);

const client = new Discord.Client();

const commandHandler = new CommandHandler(Config.prefix, client);

client.on('ready', () => {
  console.log('Bot has started');
});

client.on('message', (message: Message) => {
  commandHandler.handleMessage(message);
});

client.on('error', (e) => {
  console.error('Discord client error!', e);
});

client.login(Config.token);
