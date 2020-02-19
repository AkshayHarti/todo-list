import { eventName } from "./actions";

export default dispatch => {
  const setTodos = payload => {
    dispatch({ type: eventName.SET_TODOS, payload });
  };
  const createTodo = payload => {
    dispatch({ type: eventName.CREATE_TODO, payload });
  };

  const updateTodo = payload => {
    dispatch({ type: eventName.UPDATE_TODO, payload });
  };

  const deleteTodo = payload => {
    dispatch({ type: eventName.DELETE_TODO, payload });
  };

  const moveTodo = payload => {
    dispatch({ type: eventName.MOVE_TODO, payload });
  };

  return {
    createTodo,
    updateTodo,
    deleteTodo,
    moveTodo
  };
};
