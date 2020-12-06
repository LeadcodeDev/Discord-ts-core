import Events from '../../enums/events';
declare type Context = {
    type: Events;
};
export default function Event({ type }: Context): (constructor: Function) => void;
export {};
