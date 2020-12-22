import { CommandType } from '../Types';
import { Client } from 'discord.js';
/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
declare function useClient(): Client;
/**
 *	Get Bot unstance
 * @example
 * import { useClient } from 'Core/Hooks'
 * const client = useClient()
 * @returns Client
 */
declare function useCommands(): Array<CommandType>;
export { useClient, useCommands };
