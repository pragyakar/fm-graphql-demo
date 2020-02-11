import React from 'react';

const OwnerDetails = (props) => {

  const { id } = props.match.params;
  
  return (
    <p>{id}</p>
  );
}

export default OwnerDetails;