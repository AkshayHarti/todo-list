import actions, { eventName } from "./actions";

export default (state, { type, payload }) => {
  switch (type) {
    case eventName.SET_TODOS: {
      const { todos } = payload;
      return actions.setTodos({ todos });
    }

    case eventName.CREATE_TODO: {
      const { label } = payload;
      return actions.createTodo({ label, todos: state });
    }

    case eventName.UPDATE_TODO: {
      const { todoIndex, newValue } = payload;
      return actions.updateTodo({ todoIndex, newValue, todos: state });
    }

    case eventName.DELETE_TODO: {
      const { todoIndex } = payload;
      return actions.deleteTodo({ todoIndex, todos: state });
    }

    case eventName.MOVE_TODO: {
      const { oldIndex, newIndex } = payload;
      return actions.moveTodo({ oldIndex, newIndex, todos: state });
    }

    default:
      return;
  }
};
