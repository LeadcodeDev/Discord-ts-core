declare type Context<T> = {
    name: string;
    description: string;
    tag: string;
    alias?: Array<string>;
    roles?: Array<T>;
};
export default function Event<T>({ name, description, tag, alias, roles }: Context<T>): (constructor: Function) => void;
export {};
