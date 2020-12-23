export interface Command {
  commandNames: string[];

  /** Usage documentation. */
  getHelpMessage(commandPrefix: string): string;

  /** Execute the command. */
  run(parsedUserCommand: CommandContext): Promise<void>;

  /** Returns whether or not the requesting user can use the command in the current context. */
  hasPermissionToRun(parsedUserCommand: CommandContext): boolean;
}
