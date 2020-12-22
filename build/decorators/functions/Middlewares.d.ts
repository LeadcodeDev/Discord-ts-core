import Hooks from '../../Enums/Hooks';
declare type Context = {
    lifecycle: Hooks;
};
declare function Middleware(ctx: Context): (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) => any;
export { Middleware, Hooks };
