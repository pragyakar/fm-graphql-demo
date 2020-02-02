import React, { Fragment } from 'react';
import TopBar from '../UIComponents/TopBar/TopBar';
import Line from '../UIComponents/Line';

const People = (props) => {

  const sendToNew = () => {
    props.history.push('/people/add');
  }

  return (
    <Fragment>
      <TopBar title={'All People'} clickHandler={sendToNew}/>
      <Line />
    </Fragment>
  );
}

export default People;