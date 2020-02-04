import React from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';

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
          <Link to={`/owners/${id}`}>
            <Button type="light" text="show" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;