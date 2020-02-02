import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar';
import Line from '../UIComponents/Line';

const Pets = (props) => {

  const sendToNew = () => {
    props.history.push('/pets/add');
  }

  return (
    <Fragment>
      <TopBar title={'All Pets'} clickHandler={sendToNew}/>
      <Line />
  </Fragment>
  );
}

export default Pets;