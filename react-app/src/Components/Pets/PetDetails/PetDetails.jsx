import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { getPetDetailsQuery } from '../../../queries/pets';
import InfoBar from './InfoBar';

const PetDetails = (props) => {

  const { loading, pet } = props.data;

  return (
    <div>
      <Link to="/pets">
        <span className={'button clear no-spaces'}>Go Back</span>
      </Link>
      <div className="pet-details-box">
      { loading ? 'loading...':
        <Fragment>
          <div className="pet-image-box">
            <img src={pet.imageUrl} alt=""/>
          </div>
          <div className="pet-info">
            <InfoBar label={'Name'} data={pet.name} />
            <InfoBar label={'Age'} data={pet.age} />
            <InfoBar label={'Breed'} data={pet.breed} />
            <InfoBar label={'Animal'} data={pet.animal} />
            <InfoBar label={'Owner'} data={pet.owner.name} />
          </div>
        </Fragment>
      }
      </div>
    </div>
  );
}

export default graphql(getPetDetailsQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }
})(PetDetails);