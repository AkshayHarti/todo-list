const { ApolloServer, gql } = require('apollo-server')
require('./config')
const { Todos } = require('./model')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields for every book in our data source.
	type Todos {
		_id: ID
		text: String
	}

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).

	type Query {
		getTodos: [Todos]
	}

	type Mutation {
		addTodo(text: String!): Todos
		updateTodo(_id: ID, text: String!): Todos
		deleteTodo(_id: ID): Boolean
	}
`

const todos = [{ text: 'My' }, { text: 'first' }, { text: 'todo' }, { text: 'app' }]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
	Query: {
		getTodos: async () => await Todos.find({}).exec(),
	},
	Mutation: {
		addTodo: async (_, args) => {
			try {
				const response = await Todos.create(args)
				return response
			} catch (error) {
				return error.message
			}
		},

		updateTodo: async (_, { _id, text }) => {
			try {
				await Todos.updateOne({ _id }, { $set: { text } }).exec()
				const response = await Todos.findOne({ _id }).exec()
				return response
			} catch (error) {
				return error.message
			}
		},

		deleteTodo: async (_, { _id }) => {
			try {
				await Todos.deleteOne({ _id })
				const response = await Todos.findOne({ _id }).exec()
				console.log({ response })
				if (response === null) {
					return true
				}
			} catch (error) {
				return error.message
			}
		},
	},
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
