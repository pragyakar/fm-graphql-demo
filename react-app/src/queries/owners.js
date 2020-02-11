import { gql } from 'apollo-boost';

export const getOwnersQuery = gql`
  {
    profiles {
      id,
      name,
      email,
      imageUrl,
      pets {
        id
      }
    }
  }
`

export const getSomeOwnersQuery = gql`
{
  profiles(first: 3) {
    id,
    name,
    email,
    imageUrl,
    pets {
      id
    }
  }
}
`

export const getOwnersDropdownQuery = gql`
{
  profiles {
    id,
    name
  }
}
`
