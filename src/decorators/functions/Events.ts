import Events from '../../enums/events'
import Bot from '../../Bot'

type Context = {
	type: Events
}

function Event({ type }: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		Bot.client.on(type as any, async (ctx) => await target[propertyKey](ctx))
	}
}

export { Event, Events }
