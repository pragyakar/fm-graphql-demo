const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    imageUrl: {  type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    following: { type: GraphQLInt },
    followers: { type: GraphQLInt },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    profile: {
      type: ProfileType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        args.id
        // fetch data from DB
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});