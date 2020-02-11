import { gql } from 'apollo-boost';

export const getPetsQuery = gql`
  {
    pets {
      id,
      name,
      imageUrl,
      age
      owner {
        name
      }
    }
  }
`
export const getSomePetsQuery = gql`
{
  pets(first: 3) {
    id,
    name,
    imageUrl,
    age
    owner {
      name
    }
  }
}
`

export const addPetMutation = gql`
  mutation($name: String!, $animal: String!, $breed: String!, $age: Int!, $imageUrl: String!, $ownerId: ID! ) {
    addPet(
      name: $name,
      animal: $animal,
      breed: $breed,
      age: $age,
      imageUrl: $imageUrl,
      ownerId: $ownerId
    ){
      id,
      name
    }
  }
`