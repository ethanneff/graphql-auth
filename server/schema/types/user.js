const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID
    },
    email: {
      type: GraphQLString
    }
  }
});
