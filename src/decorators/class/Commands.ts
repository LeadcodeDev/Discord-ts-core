type Context<T> = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<T>
}

export default function Event<T>({ name, description, tag, alias, roles }: Context<T>) {
	return function (constructor: Function) {
		constructor.prototype.name = name
		constructor.prototype.description = description
		constructor.prototype.tag = tag
		constructor.prototype.alias = alias || []
		constructor.prototype.roles = roles || []
	}
}
