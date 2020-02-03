import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar/TopBar';
import Line from '../UIComponents/Line';
import OwnerCard from '../UIComponents/Card/OwnerCard';

const Owners = () => {

  return (
    <Fragment>
      <TopBar title={'All Owners'} sendTo={'/owners/add'}/>
      <Line />
      <div className="list-container">
        <OwnerCard 
          id={'123'} 
          name={'Johanne Doe'} 
          email={'johanne@email.com'} 
          petCount={'2'}
          image={''}
        />
        <OwnerCard 
          id={'123'} 
          name={'Johanne Doe'} 
          email={'johanne@email.com'} 
          petCount={'2'}
          image={''}
        />
        <OwnerCard 
          id={'123'} 
          name={'Johanne Doe'} 
          email={'johanne@email.com'} 
          petCount={'2'}
          image={''}
        />
      </div>
    </Fragment>
  );
}

export default Owners;