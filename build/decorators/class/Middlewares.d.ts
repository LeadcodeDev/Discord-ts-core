import Hooks from '../../Enums/Hooks';
declare type Context = {
    lifecycle: Hooks;
};
declare function Middleware({ lifecycle }: Context): (constructor: Function) => void;
export { Middleware, Hooks };
