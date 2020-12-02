import { EventInterface, MiddlewareInterface } from './interfaces';
import { CommandType } from './types';
import { Client } from 'discord.js';
declare class Bot {
    commands: Array<CommandType>;
    events: Array<EventInterface>;
    middlewares: Array<MiddlewareInterface>;
    client: Client;
    constructor();
    /**
     * Create new command and add this to the bot
     * @param { Command } command
     * @returns { bot }
     */
    registerCommand(command: CommandType): Bot;
    /**
     * Create new command array and add this to the bot
     * @param { Commands } commands
     * @returns { bot }
     */
    registerCommands(commands: Array<any>): Bot;
    /**
     * Create new event and add this to the bot
     * @param { Event } event
     * @returns { bot }
     */
    registerEvent(event: any): Bot;
    /**
     * Create new event array and add this to the bot
     * @param { Events } event
     * @returns { bot }
     */
    registerEvents(events: Array<any>): Bot;
    /**
     * Setup middlewares
     * @param { Middleware } middleware
     * @returns { bot }
     */
    registerMiddlewares(middleware: Array<any>): Bot;
    initialize(): Bot;
    login(token: string): Promise<Bot>;
}
declare const _default: Bot;
export default _default;
