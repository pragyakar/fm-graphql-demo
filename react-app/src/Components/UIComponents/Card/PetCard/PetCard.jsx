import React from 'react';
import Button from '../../Button';

const PetCard = (props) => {

  const { id, name, owner, age, image } = props;

  return (
    <div className="card">
      <div className="card-grid">
        <div className="card-image">
          <img src={image ? image : "https://via.placeholder.com/150"} alt="pet" />
        </div>
        <div className="card-info">
          <span className="card-pet-name">{name}</span>
          <span className="card-pet-owner">Owner: {owner}</span>
          <span className="card-pet-age">Age: {age}</span>
        </div>
        <div className="card-button">
          <Button type="light" text="show" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PetCard;