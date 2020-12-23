import { botConfig } from '../types/bot-config';

export const Config: botConfig = {
  token: process.env.BOT_TOKEN,
  prefix: '>',
  botOwnerRoleName: 'bot-owner',
  enableReactions: true,
};
