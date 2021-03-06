import React, { Fragment } from 'react';

import TopBar from '../../UIComponents/TopBar';
import Line from '../../UIComponents/Line';
import AddPetForm from './AddPetForm';

const AddPet = () => {
  
  return (
    <Fragment>
      <TopBar title={'Add New Pets'} />
      <Line />
      <AddPetForm />
    </Fragment>
  );
}

export default AddPet;