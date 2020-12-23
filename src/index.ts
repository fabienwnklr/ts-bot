import 'dotenv/config';
import Discord from 'discord.js';
import { Config } from './config';

const client: Discord.Client = new Discord.Client();
client.login(Config.token);

client.on('ready', () => console.log('Bot has been started !'));
