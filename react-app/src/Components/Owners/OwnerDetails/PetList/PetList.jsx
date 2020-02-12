import React from 'react';
import Line from '../../../UIComponents/Line';
import PetCard from '../../../UIComponents/Card/PetCard';
const PetList = (props) => {

  const { firstName, pets} = props;
  
  return (
    <div className="owner-pets-box">
      <p className="section-title">{firstName}'s Pets</p>
      <Line />
      <div className="pet-list-box">
        { pets && pets.map((pet) => (
          <PetCard 
            key={pet.id}
            id={pet.id} 
            name={pet.name} 
            owner={pet.owner} 
            age={pet.age}
            image={pet.imageUrl}
          />
        ))}
        { pets && pets.length <= 0 && "No Pets :(" }
      </div>
    </div>
  );
};

export default PetList;