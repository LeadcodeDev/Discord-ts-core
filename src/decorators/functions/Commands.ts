type Context<T> = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<T>
}

export default function Event<T>(ctx: Context<T>) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor, ...args: Array<any>) {
		return Object.defineProperty(target, propertyKey, { value: { object: { ...ctx, command: true, run: target[propertyKey] } } })
	}
}
