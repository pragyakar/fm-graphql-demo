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
    }
  }
`

const Pets = (props) => {
  console.log(props);
  
  return (
    <Fragment>
      <TopBar title={'All Pets'} sendTo={'pets/add'}/>
      <Line />
      <div className="list-container">
        <PetCard 
          id={'123'} 
          name={'Doggo Doe'} 
          owner={'Johanne Doe'} 
          age={'1'}
          image={''}
        />
        <PetCard 
          id={'123'} 
          name={'Doggo Doe'} 
          owner={'Johanne Doe'} 
          age={'1'}
          image={''}
        />
        <PetCard 
          id={'123'} 
          name={'Doggo Doe'} 
          owner={'Johanne Doe'} 
          age={'1'}
          image={''}
        />
      </div>
    </Fragment>
  );
}

export default graphql(getPetsQuery)(Pets);