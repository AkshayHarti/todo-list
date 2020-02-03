const resolvers = require("./resolvers");

const {
  Mutation: { addTodo }
} = resolvers;

test("addTodo resolver", async () => {
  const Todos = {
    create: jest.fn().mockResolvedValue({ _id: "123456", text: "testing" })
  };
  const result = await addTodo(null, { text: "abc123" }, { db: { Todos } });
  expect(result._id).toBe("123456");
});
