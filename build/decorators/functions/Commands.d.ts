declare type Context<T> = {
    name: string;
    description: string;
    tag: string;
    alias?: Array<string>;
    roles?: Array<T>;
};
export default function Event<T>(ctx: Context<T>): (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) => any;
export {};
