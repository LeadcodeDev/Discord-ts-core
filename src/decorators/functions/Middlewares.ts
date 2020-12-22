import Hooks from '../../Enums/Hooks'

type Context = {
	lifecycle: Hooks
}

function Middleware(ctx: Context) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { ...ctx, type: 'middleware', run: target[propertyKey] } } })
	}
}

export { Middleware, Hooks }
