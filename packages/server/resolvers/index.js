const arrayMove = require("array-move");

const moveTodoDBCall = async ({ oldIndex, newIndex, ctx }) => {
  const todos = await ctx.db.Todos.find({}).exec();
  console.log({ todos });
  const updateTodos = arrayMove(todos, oldIndex, newIndex);
  console.log({ updateTodos });
  await ctx.db.Todos.deleteMany({}).exec();
  await ctx.db.Todos.insertMany(updateTodos, function (err, docs) {
    console.log({ err, docs });
  });
};

const resolvers = {
  Query: {
    getTodos: async (_, __, ctx) => await ctx.db.Todos.find({}).exec(),
  },
  Mutation: {
    addTodo: async (_, args, ctx) => {
      try {
        const response = await ctx.db.Todos.create(args);
        return response;
      } catch (error) {
        return error.message;
      }
    },

    updateTodo: async (_, { _id, text }, ctx) => {
      try {
        await ctx.db.Todos.updateOne({ _id }, { $set: { text } }).exec();
        const response = await ctx.db.Todos.findOne({ _id }).exec();
        return response;
      } catch (error) {
        return error.message;
      }
    },

    deleteTodo: async (_, { _id }, ctx) => {
      try {
        const response = await ctx.db.Todos.findOne({ _id }).exec();

        if (response === null) {
          return false;
        }
        await response.deleteOne();
        return true;
      } catch (error) {
        console.log({ error });
        throw error.message;
      }
    },

    moveTodo: async (_, { oldIndex, newIndex }, ctx) => {
      moveTodoDBCall({ oldIndex, newIndex, ctx });
      return true;
    },
  },
  Todos: {
    timestamp: (root, args, ctx) => {
      return `${new Date().toISOString()}`;
    },
  },
};

module.exports = resolvers;
