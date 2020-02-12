import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';

import OwnerInfo from './OwnerInfo';
import { getOwnerDetailsQuery } from '../../../queries/owners';
import { Link } from 'react-router-dom';

const OwnerDetails = (props) => {

  const { loading, profile } = props.data; 
  const { pets, ...info } = !loading && profile;

  return (
    <div>
      <Link to="/owners">
        <span className={'button clear no-spaces'}>Go Back</span>
      </Link>
      { loading ? 'loading...':
        <Fragment>  
          <OwnerInfo {...info} />
          <div className="owner-pets-box">

          </div>
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