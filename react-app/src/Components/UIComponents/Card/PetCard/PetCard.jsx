import React from 'react';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const PetCard = (props) => {

  const { id, name, owner, age, image } = props;

  return (
    <div className="card">
      <div className="card-grid">
        <div className="card-image">
          <img src={image ? image : "https://placedog.net/300/300"} alt="pet" />
        </div>
        <div className="card-info">
          <span className="card-name">{name}</span>
          <span className="card-detail">Owner: {owner}</span>
          <span className="card-detail">Age: {age}</span>
        </div>
        <div className="card-button">
          <Link to={`/pets/${id}`}>
            <Button type="light" text="show" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;