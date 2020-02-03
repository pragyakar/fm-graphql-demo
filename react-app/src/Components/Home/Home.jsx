import React, { Fragment } from 'react';
import Line from '../UIComponents/Line';
import TitleBar from './TitleBar';
import PetCard from '../UIComponents/Card/PetCard';
import OwnerCard from '../UIComponents/Card/OwnerCard';

const Home = () => {
  return (
    <Fragment>
      <TitleBar />
      <Line />
      <PetCard 
        id={'123'} 
        name={'Doggo Doe'} 
        owner={'Johanne Doe'} 
        age={'1'}
        image={''}
      />
      <Line />
      <OwnerCard 
        id={'123'} 
        name={'Johanne Doe'} 
        email={'johanne@email.com'} 
        petCount={'2'}
        image={''}
      />
    </Fragment>
  );
}

export default Home;