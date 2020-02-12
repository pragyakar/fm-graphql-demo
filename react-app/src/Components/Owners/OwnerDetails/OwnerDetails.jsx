import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import OwnerInfo from './OwnerInfo';
import { getOwnerDetailsQuery } from '../../../queries/owners';
import PetList from './PetList/PetList';

const OwnerDetails = (props) => {

  const { loading, profile } = props.data; 
  const { pets, ...info } = !loading && profile;
  const firstName = !loading && profile.name.split(" ")[0];

  return (
    <div>
      <Link to="/owners">
        <span className={'button clear no-spaces'}>Go Back</span>
      </Link>
      { loading ? 'loading...':
        <Fragment>  
          <OwnerInfo {...info} />
          <PetList firstName={firstName} pets={pets} />
        </Fragment>
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