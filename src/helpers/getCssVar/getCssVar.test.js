import { getCssVar } from './getCssVar'

describe('CSS Var helper', () => {
	let element

	const varName = '--black'
	const varValue = '#000000'

	beforeAll(() => {
		element = document.createElement('div')
		element.style.setProperty(varName, varValue)
	})

	describe('Check property value:', () => {
		test('value is not exist', () => {
			expect(getCssVar('--foo-bar-baz', '', element)).toEqual('')
		})

		test('value is not exist, but there is a fallback', () => {
			const fallbackValue = 'red'

			expect(getCssVar('--foo-bar-baz', fallbackValue, element)).toEqual(
				fallbackValue
			)
		})

		test('value is exist', () => {
			expect(getCssVar(varName, '', element)).toEqual(varValue)
		})
	})

	describe('Check property name:', () => {
		test('name is valid', () => {
			expect(() => getCssVar('--red')).not.toThrow()
		})

		test('name is invalid', () => {
			expect(() => getCssVar('red')).toThrow()
			expect(() => getCssVar()).toThrow()
		})

		test('name type is invalid', () => {
			expect(() => getCssVar(42)).toThrow()
		})
	})
})
