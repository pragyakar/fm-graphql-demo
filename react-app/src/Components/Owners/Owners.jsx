import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar/TopBar';
import Line from '../UIComponents/Line';

const Owners = (props) => {

  const sendToNew = () => {
    props.history.push('/owners/add');
  }

  return (
    <Fragment>
      <TopBar title={'All Owners'} clickHandler={sendToNew}/>
      <Line />
    </Fragment>
  );
}

export default Owners;