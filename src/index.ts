import 'dotenv/config';
import Discord, { Message } from 'discord.js';
import { Config } from './config';
import { botConfig } from './types/bot-config';

/** Pre-startup validation of the bot config. */
function validateConfig(botConf: botConfig) {
    if (!botConf.token) {
        throw new Error('You need to specify your Discord bot token!');
    }
}

validateConfig(Config);

const client: Discord.Client = new Discord.Client();

client.login(Config.token);

client.on('ready', () => console.log('Bot has been started !'));

client.on('message', (message: Message) => {
    console.log(message);
});
