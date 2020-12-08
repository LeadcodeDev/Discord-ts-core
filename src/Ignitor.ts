import Bot from './Bot'
import Lifecycle from './middlewares/Lifecycle'
import Hooks from './enums/hooks'
import { command } from 'execa'

export default class Ignitor {
	private bot: typeof Bot

	constructor(bot: typeof Bot) {
		this.bot = bot
		this.run()
	}

	private run() {
		const { client, events, middlewares, modules, commands } = this.bot
		Lifecycle.emit(Hooks.BEFORE_START)
		events.forEach(async ({ name, run }: any) => await client.on(name, run))
		middlewares.forEach(async (middleware: any) => await Lifecycle.on(middleware.lifecycle, (params?: any) => middleware.run(params)))
		modules.forEach((module: any) => {
			Object.values(Object.getPrototypeOf(new module())).forEach(async (func: any) => {
				const module = Object.getOwnPropertyDescriptors(func)
				if (module?.object?.value.type == 'command') {
					commands.push({
						name: func.object.name,
						description: func.object.description,
						tag: func.object.tag,
						alias: func.object.alias || [],
						roles: func.object.roles || [],
						run: func.object.run,
					})
				}
				if (module?.object?.value.type == 'middleware') {
					await Lifecycle.on(func.object.lifecycle, (params?: any) => func.object.run(params))
				}
			})
		})
		Lifecycle.emit(Hooks.AFTER_START)
	}
}
