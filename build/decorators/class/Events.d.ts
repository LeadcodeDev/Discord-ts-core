import Events from '../../Enums/Events';
declare type Context = {
    type: Events;
};
declare function Event({ type }: Context): (constructor: Function) => void;
export { Event, Events };
