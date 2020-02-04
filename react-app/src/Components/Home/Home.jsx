import React, { Fragment } from 'react';
import Line from '../UIComponents/Line';
import TitleBar from './TitleBar';
import PetsList from './PetsList';
import OwnerList from './OwnersList';

const Home = () => {
  return (
    <Fragment>
      <TitleBar />
      <Line />
      <PetsList />
      <Line />
      <OwnerList />
    </Fragment>
  );
}

export default Home;