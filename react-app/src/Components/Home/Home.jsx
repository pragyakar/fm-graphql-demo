import React, { Fragment } from 'react';
import Line from '../UIComponents/Line';
import TitleBar from './TitleBar';
import PetCard from '../UIComponents/Card/PetCard/PetCard';

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
    </Fragment>
  );
}

export default Home;