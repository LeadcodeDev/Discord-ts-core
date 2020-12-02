import { GuardInterface } from '../interfaces';
import { Message } from 'discord.js';
declare class Guard implements GuardInterface {
    protect(message: Message): Promise<void>;
    private hasRoles;
}
declare const _default: Guard;
export default _default;
