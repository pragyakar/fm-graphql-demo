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