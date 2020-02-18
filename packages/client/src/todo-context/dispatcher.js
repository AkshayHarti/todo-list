import { eventName } from "./actions";

export default dispatch => {
  const initTodo = payload => {
    dispatch({ type: eventName.INIT_TODO, payload });
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

  return {
    initTodo,
    createTodo,
    updateTodo,
    deleteTodo
  };
};
