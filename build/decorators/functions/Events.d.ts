import Events from '../../Enums/Events';
declare type Context = {
    type: Events;
};
declare function Event({ type }: Context): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export { Event, Events };
