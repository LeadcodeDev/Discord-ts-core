import Hooks from '../../Enums/Hooks'

type Context = {
	lifecycle: Hooks
}

function Middleware({ lifecycle }: Context) {
	return function (constructor: Function) {
		constructor.prototype.lifecycle = lifecycle
		constructor.prototype.execute = (params: any) => constructor.prototype.emit(name, params)
	}
}

export { Middleware, Hooks }
