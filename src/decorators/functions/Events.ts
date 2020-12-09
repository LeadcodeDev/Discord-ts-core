import Events from '../../enums/events'
import Bot from '../../Bot'

type Context = {
	type: Events
}

function Event({ type }: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		Bot.client.on(type as string, async (...ctx) => {
			const [param1, params2, param3, param4, param5] = ctx
			target[propertyKey](param1, params2, param3, param4, param5)
		})
	}
}

export { Event, Events }
