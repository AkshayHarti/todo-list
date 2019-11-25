import React from 'react'
import dispatcher from './dispatcher'

const TodoContext = React.createContext()
export default TodoContext

export const TodoContextProvider = () => {
	const [todos, dispatch] = useReducer(todoReducer, [])

	const dispatchableActions = dispatcher(dispatch)

	const contextValue = {
		...dispatchableActions,
		todos,
	}

	return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}
