import Robot from '../Bot'
import { Logger, State } from '../Utils/Logger'
import { GuardInterface } from '../Interfaces'
import Lifecycle from '../Middlewares/Lifecycle'
import { CommandType } from '../types'
import Hooks from '../Enums/Hooks'
import Env from '../Utils/Env'
import { GuildMember, Message } from 'discord.js'

class Guard implements GuardInterface {
	public async protect(message: Message): Promise<void> {
		const { content, member, author } = message

		const sender: GuildMember = member!
		const args: string[] = content.split(' ')
		const commandName = args[0].replace(Env.get('CLIENT_PREFIX'), '')

		Robot.commands
			.filter((command: CommandType) => command.tag === commandName || command.alias?.includes(commandName))
			.forEach(async (command: CommandType) => {
				const { roles, name } = command
				if (roles?.length != 0) {
					if (this.hasRoles(roles!, sender)) {
						await command.run(message, args.slice(1))
						await Logger.send(State.INFO, `${author.tag} execute command (${name})`)
					} else {
						await sender.lastMessage!.reply("Vous n'avez pas l'autorisation d'excuter cette commande.")
						await Logger.send(State.ERROR, `${author.tag} not allowed to execute command (${command.name})`)
					}
				} else {
					await command.run(message, args.slice(1))
					await Logger.send(State.INFO, `${author.tag} execute command (${name})`)
				}
				await message.delete()
				Lifecycle.emit(Hooks.COMMAND_RECEIVED, {
					commandName: name,
					commandRoles: roles,
					sender: author,
					allowed: this.hasRoles(roles!, sender),
				})
			})

		Lifecycle.emit(Hooks.MESSAGE_RECEIVED, { message })
	}

	private hasRoles(roles: Array<string>, sender: GuildMember): boolean {
		let bool: boolean = false
		if (sender.roles.cache.size > 1) {
			roles.map((role) => sender.roles.cache.has(role) && (bool = true))
		}
		return bool
	}
}

export default new Guard()
