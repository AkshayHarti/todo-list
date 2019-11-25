const actions = require('./actions')

describe('createTodo', () => {
	it('should return a new todo entry', () => {
		const label = 'newTodo'
		const todos = []
		const expected = [{ label: 'newTodo', checked: false }]

		const result = actions.createTodo({ label, todos })

		expect(result).toEqual(expected)
	})
})
