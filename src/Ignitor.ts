import Bot from './Bot'
import Lifecycle from './middlewares/Lifecycle'
import Hooks from './enums/hooks'

export default class Ignitor {
	private bot: typeof Bot

	constructor(bot: typeof Bot) {
		this.bot = bot
		this.run()
	}

	async run() {
		const { client, events, middlewares } = this.bot
		Lifecycle.emit(Hooks.BEFORE_START)
		events.forEach(async ({ name, run }: any) => await client.on(name, run))
		middlewares.forEach(async (middleware: any) => await Lifecycle.on(middleware.lifecycle, (params?: any) => middleware.run(params)))
		Lifecycle.emit(Hooks.AFTER_START)
	}
}
