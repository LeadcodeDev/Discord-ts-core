import Events from 'Core/enums/events'

type Context = {
	type: Events
}

export default function Event({ type }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}
