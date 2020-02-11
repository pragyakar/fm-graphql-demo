import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import PetCard from '../../UIComponents/Card/PetCard';
import Button from '../../UIComponents/Button';
import { getSomePetsQuery } from '../../../queries/pets';

const PetsList = (props) => {

  const { loading, pets } = props.data;

  return (
    <div className="home-section">
      <div className="home-section-title-bar">
        <span className="home-section-title">Pets</span>
        <span className="home-section-button">
          <Link to="/pets">
            <Button text="See All" type="clear"/>
          </Link>
        </span>
      </div>
      { loading ? 'Loading': 
        pets && pets.map((pet) => (
          <PetCard 
            key={pet.id}
            id={pet.id} 
            name={pet.name} 
            owner={pet.owner} 
            age={pet.age}
            image={pet.imageUrl}
          />
        ))
      }
    </div>
  );
}

export default graphql(getSomePetsQuery)(PetsList);