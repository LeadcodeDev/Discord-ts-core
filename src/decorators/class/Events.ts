import Events from '../../Enums/Events'

type Context = {
	type: Events
}

function Event({ type }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = type
	}
}

export { Event, Events }
