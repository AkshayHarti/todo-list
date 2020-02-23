import actions, { eventName } from "./actions";

export default (state, { type, payload }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (type) {
        case eventName.CREATE_TODO: {
          const { _id } = payload;
          resolve(actions.createTodo({ _id, text: "", todos: state }));
          break;
        }

        case eventName.UPDATE_TODO: {
          const { todoIndex, newValue } = payload;
          resolve(actions.updateTodo({ todoIndex, newValue, todos: state }));
          break;
        }

        case eventName.DELETE_TODO: {
          const { todoIndex } = payload;
          resolve(actions.deleteTodo({ todoIndex, todos: state }));
          break;
        }

        case eventName.MOVE_TODO: {
          const { oldIndex, newIndex } = payload;
          resolve(actions.moveTodo({ oldIndex, newIndex, todos: state }));
          break;
        }

        default:
          return;
      }
    }, 100);
  });
};
