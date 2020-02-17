import actions, { eventName } from "./actions";

export default (state, { type, payload }) => {
  switch (type) {
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
      return actions.createTodo({ todoIndex, todos: state });
    }
  }
};
