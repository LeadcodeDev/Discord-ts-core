import { User } from 'discord.js';
declare type CommandReceived = {
    commandName: string;
    commandRoles: Array<string>;
    sender: User;
    allowed: boolean;
};
export default CommandReceived;
