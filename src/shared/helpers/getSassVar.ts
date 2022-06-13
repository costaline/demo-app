import vars from '@@/assets/styles/export-vars.module.scss'

export const getSassVar = (variable: string): string => {
	if (!Object.prototype.hasOwnProperty.call(vars, variable)) {
		// eslint-disable-next-line no-console
		console.warn(`Variable "${variable}" not found`)

		return ''
	}

	return (vars as unknown as Record<string, string>)[variable]
}
