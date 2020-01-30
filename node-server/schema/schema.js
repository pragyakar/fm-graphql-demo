const graphql = require("graphql");
const _ = require("lodash");

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLID
} = graphql;

const profiles = [
  { 
    id: '1', 
    name: 'Pragyakar Joshi', 
    imageUrl: 'https://avatars0.githubusercontent.com/u/46337447?s=460&v=4', 
    bio: 'GraphQL is so cool', 
    email: 'pragyakar@fusemachines.com',
    following: 88,
    followers: 45
  },
  { 
    id: '2', 
    name: 'Sanish Pradhananga', 
    imageUrl: 'https://avatars2.githubusercontent.com/u/19884461?s=460&v=4', 
    bio: 'Im better at GraphQL than Pragyakar', 
    email: 'sanish.pradhananga@fusemachines.com',
    following: 53,
    followers: 67
  },
  { 
    id: '3', 
    name: 'Rosy Shrestha', 
    imageUrl: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t31.0-8/s960x960/21762864_127092424700879_7605025080411516842_o.jpg?_nc_cat=111&_nc_oc=AQk18XlKZsSaiotEOFBdk3e8CDza4SuE1Yu76iuVE6P8p2e1SJBQCZ3NUGaMue3WQKI&_nc_ht=scontent.fktm8-1.fna&oh=c711e3813dcd1401727c7d427087b5f9&oe=5ED8CEA0', 
    bio: 'These noobs think they know GraphQL', 
    email: 'rosy@fusemachines.com',
    following: 32,
    followers: 90
  },
  { 
    id: '4', 
    name: 'Sujan Shrestha', 
    imageUrl: 'https://avatars1.githubusercontent.com/u/28521955?s=460&v=4', 
    bio: 'GraphQL Supreme Leader', 
    email: 'sujan.shrestha@fusemachines.com',
    following: 87,
    followers: 18
  },
  { 
    id: '5', 
    name: 'Saurav Maharjan', 
    imageUrl: 'https://avatars1.githubusercontent.com/u/29722184?s=460&v=4', 
    bio: 'Star my repo plis', 
    email: 'saurav@fusemachines.com',
    following: 22,
    followers: 99
  }
]

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: GraphQLID },
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
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        args.id
        return _.find(profiles, { id: args.id });
        // fetch data from DB
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});