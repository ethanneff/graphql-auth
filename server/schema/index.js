const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users, user, self, login, signup, logout } = require("./queries/user");

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      self,
      user,
      users
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      signup,
      login,
      logout
    }
  })
});
