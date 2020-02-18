import arrayMove from "array-move";

export const eventName = {
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  MOVE_TODO: "MOVE_TODO"
};

const createNewTodo = ({ label }) => ({ label, checked: false });

export default {
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
  },
  moveTodo: ({ oldIndex, newIndex, todos }) => {
    return arrayMove(todos, oldIndex, newIndex);
  }
};
