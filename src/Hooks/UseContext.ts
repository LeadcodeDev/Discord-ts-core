import Robot from 'Core/Bot'
import { CommandType } from 'Core/types'
import { Client } from 'discord.js'

/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useClient(): Client {
	return Robot.client
}

/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
function useCommands(): Array<CommandType> {
	return Robot.commands
}

export { useClient, useCommands }
