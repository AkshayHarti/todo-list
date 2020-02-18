export const eventName = {
  INIT_TODO: "INIT_TODO",
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO"
};

const createNewTodo = ({ label }) => ({ label, checked: false });

export default {
  initTodo: ({ todos }) => {
    return todos;
  },
  createTodo: ({ label, todos }) => {
    const copy = todos.concat(createNewTodo({ label }));
    return copy;
  },
  updateTodo: ({ todoIndex, newValue, todos }) => {
    const copy = todos;
    copy[todoIndex].label = newValue;
    return copy;
  },
  deleteTodo: ({ todoIndex, todos }) => {
    const copy = todos;
    copy.splice(todoIndex, 1);
    return copy;
  }
};
