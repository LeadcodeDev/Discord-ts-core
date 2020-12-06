import { Message } from 'discord.js'

type ModuleCommandType = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<any>
	run(): void
}

export default ModuleCommandType
