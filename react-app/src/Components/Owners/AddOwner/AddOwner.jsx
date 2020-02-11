import React, { Fragment } from 'react';
import TopBar from '../../UIComponents/TopBar';
import Line from '../../UIComponents/Line';
import AddOwnerForm from './AddOwnerForm';

const AddOwner = () => {
  return (
    <Fragment>
      <TopBar title={'Add New Owner'} />
      <Line />
      <AddOwnerForm />
    </Fragment>
  );
}

export default AddOwner;