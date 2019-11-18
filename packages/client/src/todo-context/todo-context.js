import React from 'react'

const TodoContext = React.createContext()
export default TodoContext

const TodoContextProvider = () => {
	const [todos, dispatch] = useReducer(todoReducer, [])

	const contextValue = {
		todos,
	}

	return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}
