import { Message } from 'discord.js';
declare type CommandType = {
    name: string;
    description: string;
    tag: string;
    alias?: Array<string>;
    roles?: Array<any>;
    run(msg: Message, args: Array<string>): void;
};
export default CommandType;
