import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar/TopBar';
import Line from '../UIComponents/Line';
import OwnerCard from '../UIComponents/Card/OwnerCard';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getOwnersQuery = gql`
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

const Owners = (props) => {

  const { loading, profiles } = props.data;
  
  return (
    <Fragment>
      <TopBar title={'All Owners'} sendTo={'/owners/add'}/>
      <Line />
      { loading ? 'Loading' : 
        <div className="list-container">
          {profiles && profiles.map((profile) => (
            <OwnerCard 
              key={profile.id}
              id={profile.id} 
              name={profile.name} 
              email={profile.email} 
              petCount={profile.pets.length}
              image={profile.imageUrl}
            />
          ))}
        </div>
      }
    </Fragment>
  );
}

export default graphql(getOwnersQuery)(Owners);