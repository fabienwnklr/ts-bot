import { Client } from 'discord.js'
import { CommandContext } from '../models/command-context';
// Types
import { Command } from '../types/command';

export class News implements Command {
    client: Client;
    commandNames = ['news', 'new', 'nwes', 'nesw'];

    constructor (client: Client) {
        this.client = client;
    }

    getHelpMessage(commandPrefix: string): string {
        return `Use ${commandPrefix}news to get the news of LOL, bro.`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        const user = parsedUserCommand.originalMessage.author.username;
        await parsedUserCommand.originalMessage.reply(`No new(s) :worried:, i'm sorry.. (i'm not.)`);
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}