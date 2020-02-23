import React, { useReducer } from "react";
import useAsyncReducer from "./useAsyncReducer";
import dispatcher from "./dispatcher";
import todoReducer from "./reducer";
const TodoContext = React.createContext();
export default TodoContext;

export const TodoContextProvider = ({ state = [], children }) => {
  const [todos, dispatch] = useAsyncReducer(todoReducer, state);

  const dispatchableActions = dispatcher(dispatch);

  const contextValue = {
    ...dispatchableActions,
    todos
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
