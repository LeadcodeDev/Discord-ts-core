import Robot from 'Core/Bot'
import { UseChannels } from 'Core/types'
import { Logger, State } from 'Core/utils/Logger'
import { Channel, Message, TextChannel } from 'discord.js'

/**
 *	Recovery of all channels
 * @example
 * import { useChannels } from 'Core/hooks'
 * const MyChannels = useChannels(true)
 *
 * console.log(MyChannels)
 * // Return my channels from discord guild
 *
 * @param truncate Default to false
 * @returns { Channels | undefined }
 */
function useChannels({ truncate }: UseChannels): Array<Channel | any> {
	let channels: Array<any> = []
	Robot.client.channels.cache.forEach((channel: Channel) => {
		truncate ? (channels = [...channels, { id: channel.id, type: channel.type }]) : (channels = [...channels, channel])
	})
	return channels
}

/**
 *	Recovery of all channels
 * @example
 * import { useChannel } from 'Core/Hooks'
 * const MyChannel = useChannel('583050048766476355')
 *
 * console.log(MyChannel)
 * // Return my channel from discord guild with id
 *
 * @returns Channel
 */
function useChannel(id: string): TextChannel | undefined {
	if (!id) throw Logger.send(State.ERROR, `Please select channel ID`)
	return Robot.client.channels.cache.find((channel: any) => channel.id === id) as TextChannel
}

/**
 *	Recovery of all messages
 * @example
 * import { useMessages } from 'Core/Hooks'
 * const MyMessages = useMessages()
 *
 * console.log(MyMessages)
 * // Return messages from discord guild
 *
 * @returns Channel
 */
function useMessages(): Array<Message> {
	let messagesList: Array<any> = []
	Robot.client.channels.cache.forEach((channel) => {
		if (channel instanceof TextChannel) {
			channel.messages.cache.forEach((message) => {
				messagesList = [...messagesList, message]
			})
		}
	})
	return messagesList
}

export { useChannels, useChannel, useMessages }
