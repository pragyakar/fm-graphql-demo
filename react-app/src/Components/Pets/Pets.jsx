import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar';
import Line from '../UIComponents/Line';
import PetCard from '../UIComponents/Card/PetCard';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPetsQuery = gql`
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

const Pets = (props) => {

  const { loading, pets } = props.data;
  
  return (
    <Fragment>
      <TopBar title={'All Pets'} sendTo={'pets/add'}/>
      <Line />
      { loading ? 'Loading': 
        <div className="list-container">
          { pets && pets.map((pet) => (
            <PetCard 
              key={pet.id}
              id={pet.id} 
              name={pet.name} 
              owner={pet.owner} 
              age={pet.age}
              image={pet.imageUrl}
            />
          ))}
        </div>  
      }
    </Fragment>
  );
}

export default graphql(getPetsQuery)(Pets);