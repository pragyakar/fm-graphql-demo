import React from 'react';

import TopBar from '../../UIComponents/TopBar';
import Line from '../../UIComponents/Line';
import AddPetForm from './AddPetForm';

const AddPet = () => {
  
  return (
    <div>
      <TopBar title={'Add New Pets'} />
      <Line />
      <AddPetForm />
    </div>
  );
}

export default AddPet;