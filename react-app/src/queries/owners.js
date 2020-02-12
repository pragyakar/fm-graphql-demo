import { gql } from 'apollo-boost';

export const getOwnersQuery = gql`
  query {
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
  query {
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
  query {
    profiles {
      id,
      name
    }
  }
`

export const getOwnerDetailsQuery = gql`
  query($id: ID!) {
    profile(id: $id) {
      id, 
      name,
      imageUrl, 
      email, 
      bio,
      pets {
        id,
        name, 
        owner {
          name
        }
        age,
        imageUrl,
      }
    }
  }
`

export const addOwnerMutation = gql`
  mutation($name: String!, $imageUrl: String!, $bio: String, $email: String!) {
    addProfile(
      name: $name,
      imageUrl: $imageUrl, 
      bio: $bio,
      email: $email,
    ) {
      id,
      name
    }
  }
`
