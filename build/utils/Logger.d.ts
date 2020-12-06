import LoggerList from '../enums/logger';
declare class Logger {
    constructor();
    send(type: LoggerList, message: string, prod?: boolean): Promise<void>;
    private sendMessage;
    private date;
    private chooseColors;
}
declare const logger: Logger;
export { logger as Logger, LoggerList as State };
