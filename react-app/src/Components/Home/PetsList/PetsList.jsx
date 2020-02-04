import React from 'react';
import PetCard from '../../UIComponents/Card/PetCard';
import Button from '../../UIComponents/Button';
import { Link } from 'react-router-dom';

const PetsList = () => {

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
      <PetCard 
        id={'123'} 
        name={'Doggo Doe'} 
        owner={'Johanne Doe'} 
        age={'1'}
        image={''}
      />
      <PetCard 
        id={'123'} 
        name={'Doggo Doe'} 
        owner={'Johanne Doe'} 
        age={'1'}
        image={''}
      />
      <PetCard 
        id={'123'} 
        name={'Doggo Doe'} 
        owner={'Johanne Doe'} 
        age={'1'}
        image={''}
      />
    </div>
  );
}

export default PetsList;