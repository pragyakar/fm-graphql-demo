import React from 'react';
import Button from '../../Button';

const OwnerCard = (props) => {

  const { id, name, email, petCount, image } = props;

  return (
    <div className="card">
      <div className="card-grid">
        <div className="card-image">
          <img src={image ? image : "https://via.placeholder.com/150"} alt="pet" />
        </div>
        <div className="card-info">
          <span className="card-name">{name}</span>
          <span className="card-detail">{email}</span>
          <span className="card-detail">Pets Owned: {petCount}</span>
        </div>
        <div className="card-button">
          <Button type="light" text="show" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;