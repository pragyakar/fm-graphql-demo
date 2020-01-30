const graphql = require("graphql");
const _ = require("lodash");

const Profile = require("../models/profile");
const Pet = require("../models/pet");

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const profiles = [
  { 
    id: 'u1', 
    name: 'Pragyakar Joshi', 
    imageUrl: 'https://avatars0.githubusercontent.com/u/46337447?s=460&v=4', 
    bio: 'GraphQL is so cool', 
    email: 'pragyakar@fusemachines.com'
  },
  { 
    id: 'u2', 
    name: 'Sanish Pradhananga', 
    imageUrl: 'https://avatars2.githubusercontent.com/u/19884461?s=460&v=4', 
    bio: 'Im better at GraphQL than Pragyakar', 
    email: 'sanish.pradhananga@fusemachines.com'
  },
  { 
    id: 'u3', 
    name: 'Rosy Shrestha', 
    imageUrl: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t31.0-8/s960x960/21762864_127092424700879_7605025080411516842_o.jpg?_nc_cat=111&_nc_oc=AQk18XlKZsSaiotEOFBdk3e8CDza4SuE1Yu76iuVE6P8p2e1SJBQCZ3NUGaMue3WQKI&_nc_ht=scontent.fktm8-1.fna&oh=c711e3813dcd1401727c7d427087b5f9&oe=5ED8CEA0', 
    bio: 'These noobs think they know GraphQL', 
    email: 'rosy@fusemachines.com'
  },
  { 
    id: 'u4', 
    name: 'Sujan Shrestha', 
    imageUrl: 'https://avatars1.githubusercontent.com/u/28521955?s=460&v=4', 
    bio: 'GraphQL Supreme Leader', 
    email: 'sujan.shrestha@fusemachines.com'
  },
  { 
    id: 'u5', 
    name: 'Saurav Maharjan', 
    imageUrl: 'https://avatars1.githubusercontent.com/u/29722184?s=460&v=4', 
    bio: 'Star my repo plis', 
    email: 'saurav@fusemachines.com'
  }
]

const pets = [
  { 
    id: 'p1', 
    name: 'Happy', 
    animal: 'Dog',
    breed: 'Beagle', 
    age: 6,
    imageUrl: 'https://placedog.net/360/360/',
    ownerId: 'u1'
  },
  { 
    id: 'p2', 
    name: 'Puppy',
    animal: 'Dog', 
    breed: 'Cross breed', 
    age: 3,
    imageUrl: 'https://placedog.net/364/364/',
    ownerId: 'u2'
  },
  { 
    id: 'p3', 
    name: 'Dexter',
    animal: 'Dog', 
    breed: 'Siberian Husky', 
    age: 1,
    imageUrl: 'https://placedog.net/365/365/',
    ownerId: 'u3'
  },
  { 
    id: 'p4', 
    name: 'Coco', 
    animal: 'Cat',
    breed: 'Persian', 
    age: 6,
    imageUrl: 'https://placekitten.com/g/365/365',
    ownerId: 'u4'
  },
  { 
    id: 'p5', 
    name: 'Sukka', 
    animal: 'Cat',
    breed: 'Siamese', 
    age: 10,
    imageUrl: 'https://placekitten.com/g/360/360',
    ownerId: 'u4'
  },

]

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    imageUrl: {  type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    pets: { 
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        // return _.filter(pets, { ownerId: parent.id })
        return Pet.find({ ownerId: parent.id });
      }
    }
  })
});

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    animal: { type: GraphQLString },
    breed: { type: GraphQLString },
    age: { type: GraphQLInt },
    imageUrl: {  type: GraphQLString },
    owner: {
      type: ProfileType,
      resolve(parent, args) {
        // return _.find(profiles, { id: parent.ownerId})
        return Profile.findById(parent.id);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        // return profiles;
        return Profile.find({});
      }
    },
    profile: {
      type: ProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        args.id
        // return _.find(profiles, { id: args.id });
        return Profile.findById(args.id);
      }
    },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        // return pets
        return Pet.find({});
      }
    },
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        args.id
        // return _.find(pets, { id: args.id })
        return Pets.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProfile: {
      type: ProfileType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        imageUrl: {  type: GraphQLString },
        bio: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let profile = new Profile({
          name: args.name,
          imageUrl: args.imageUrl,
          bio: args.bio,
          email: args.email
        });
        return profile.save();
      }
    },
    addPet: {
      type: PetType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        imageUrl: {  type: new GraphQLNonNull(GraphQLString) },
        animal: { type: new GraphQLNonNull(GraphQLString) },
        breed: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        ownerId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let pet = new Pet({
          name: args.name,
          imageUrl: args.imageUrl,
          animal: args.animal,
          breed: args.breed,
          age: args.age,
          ownerId: args.ownerId
        });
        return pet.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation 
});