import { UseChannels } from '../types';
import { Channel, Message, TextChannel } from 'discord.js';
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
declare function useChannels({ truncate }: UseChannels): Array<Channel | any>;
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
declare function useChannel(id: string): TextChannel | undefined;
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
declare function useMessages(): Array<Message>;
export { useChannels, useChannel, useMessages };
