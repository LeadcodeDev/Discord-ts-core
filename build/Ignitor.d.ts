import Bot from './Bot';
export default class Ignitor {
    private bot;
    constructor(bot: typeof Bot);
    run(): Promise<void>;
}
