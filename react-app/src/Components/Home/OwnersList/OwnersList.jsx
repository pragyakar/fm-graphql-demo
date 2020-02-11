import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import OwnerCard from '../../UIComponents/Card/OwnerCard';
import Button from '../../UIComponents/Button';
import { getSomeOwnersQuery } from '../../../queries/owners';

const OwnerList = (props) => {

  const { loading, profiles } = props.data;

  return (
    <div className="home-section">
      <div className="home-section-title-bar">
        <span className="home-section-title">Owners</span>
        <span className="home-section-button">
          <Link to="/owners">
            <Button text="See All" type="clear"/>
          </Link>
        </span>
      </div>
      { loading ? 'Loading' : 
        profiles && profiles.map((profile) => (
          <OwnerCard 
            key={profile.id}
            id={profile.id} 
            name={profile.name} 
            email={profile.email} 
            petCount={profile.pets.length}
            image={profile.imageUrl}
          />
        ))
      }
    </div>
  );
}

export default graphql(getSomeOwnersQuery)(OwnerList);