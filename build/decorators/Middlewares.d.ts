import Hooks from '../enums/hooks';
declare type Context = {
    lifecycle: Hooks;
};
export default function Middleware({ lifecycle }: Context): (constructor: Function) => void;
export {};
