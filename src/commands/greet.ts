import { Client } from 'discord.js'
import { CommandContext } from '../models/command-context';
// Types
import { Command } from '../types/command';

export class GreetCommand implements Command {
    client: Client;
    commandNames = ['greet', 'hello'];

    constructor (client: Client) {
        this.client = client;
    }

    getHelpMessage(commandPrefix: string): string {
        return `Use ${commandPrefix}greet to get a greeting.`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        const user = parsedUserCommand.originalMessage.author.username;
        await parsedUserCommand.originalMessage.reply(`hello ${user} :poop:`);
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}