import Ignitor from './Ignitor'
import { EventInterface, MiddlewareInterface } from './interfaces'
import { CommandType } from 'Core/types'
import { Client } from 'discord.js'

class Bot {
	public commands: Array<CommandType> = []
	public events: Array<EventInterface> = []
	public middlewares: Array<MiddlewareInterface> = []
	public client: Client

	constructor() {
		this.client = new Client()
	}

	/**
	 * Create new command and add this to the bot
	 * @param { Command } command
	 * @returns { bot }
	 */
	public registerCommand(command: CommandType): Bot {
		this.commands.push(command)
		return this
	}

	/**
	 * Create new command array and add this to the bot
	 * @param { Commands } commands
	 * @returns { bot }
	 */
	public registerCommands(commands: Array<any>): Bot {
		commands.forEach((command: any) => this.commands.push(new command()))
		return this
	}

	/**
	 * Create new event and add this to the bot
	 * @param { Event } event
	 * @returns { bot }
	 */
	public registerEvent(event: any): Bot {
		this.events.push(new event())
		return this
	}

	/**
	 * Create new event array and add this to the bot
	 * @param { Events } event
	 * @returns { bot }
	 */
	public registerEvents(events: Array<any>): Bot {
		events.forEach((event) => this.events.push(new event()))
		return this
	}

	/**
	 * Setup middlewares
	 * @param { Middleware } middleware
	 * @returns { bot }
	 */
	public registerMiddlewares(middleware: Array<any>): Bot {
		middleware.forEach((middleware) => this.middlewares.push(new middleware()))
		return this
	}

	initialize(): Bot {
		new Ignitor(this)
		return this
	}

	public async login(token: string): Promise<Bot> {
		await this.client.login(token)
		return this
	}
}

export default new Bot()
