import { eventName } from "./actions";

export default dispatch => {
  const createTodo = payload => {
    dispatch({ type: eventName.CREATE_TODO, payload });
  };

  const updateTodo = payload => {
    dispatch({ type: eventName.UPDATE_TODO, payload });
  };

  const deleteTodo = payload => {
    dispatch({ type: eventName.DELETE_TODO, payload });
  };

  return {
    createTodo,
    updateTodo,
    deleteTodo
  };
};
