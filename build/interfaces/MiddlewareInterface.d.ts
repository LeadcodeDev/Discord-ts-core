/// <reference types="node" />
import { EventEmitter } from 'events';
export default class MiddlewareInterface extends EventEmitter {
    readonly name?: string;
    run(params?: any): Promise<void>;
    execute(...params: any): void;
}
