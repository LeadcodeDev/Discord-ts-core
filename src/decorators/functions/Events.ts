import Events from '../../Enums/Events'
import Bot from '../../Bot'

type Context = {
	type: Events
}

function Event({ type }: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		Bot.client.on(type as string, async (...ctx) => {
			target[propertyKey](...ctx)
		})
	}
}

export { Event, Events }
