const resolvers = {
  Query: {
    getTodos: async (_, __, ctx) => await ctx.db.Todos.find({}).exec()
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
        await ctx.db.Todos.deleteOne({ _id });
        const response = await ctx.db.Todos.findOne({ _id }).exec();
        console.log({ response });
        if (response === null) {
          return true;
        }
      } catch (error) {
        return error.message;
      }
    }
  },
  Todos: {
    timestamp: (root, args, ctx) => {
      return `${new Date().toISOString()}`;
    }
  }
};

module.exports = resolvers;
