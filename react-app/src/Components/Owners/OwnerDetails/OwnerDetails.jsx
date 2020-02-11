import React from 'react';
import { graphql } from 'react-apollo';

import { getOwnerDetailsQuery } from '../../../queries/owners';

const OwnerDetails = (props) => {

  const { loading, profile } = props.data; 
  
  return (
    <div>
      {loading ? "Loading": 
        <p>{profile.name}</p>
      }
    </div>
  );
}

export default graphql(getOwnerDetailsQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }
})(OwnerDetails);