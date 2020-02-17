import React, { useEffect, useReducer } from "react";
import dispatcher from "./dispatcher";
import todoReducer from "./reducer";
const TodoContext = React.createContext();
export default TodoContext;

export const TodoContextProvider = ({ state = [], children }) => {
  const [todos, dispatch] = useReducer(todoReducer, state);

  const dispatchableActions = dispatcher(dispatch);

  const contextValue = {
    ...dispatchableActions,
    todos
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
