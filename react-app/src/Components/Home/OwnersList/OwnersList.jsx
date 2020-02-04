import React from 'react';
import { Link } from 'react-router-dom';
import OwnerCard from '../../UIComponents/Card/OwnerCard';
import Button from '../../UIComponents/Button';

const OwnerList = () => {
  return (
    <div className="home-section">
      <div className="home-section-title-bar">
        <span className="home-section-title">Owners</span>
        <span className="home-section-button">
          <Link to="/owners">
            <Button text="See All" type="clear"/>
          </Link>
        </span>
      </div>
      <OwnerCard 
        id={'123'} 
        name={'Johanne Doe'} 
        email={'johanne@email.com'} 
        petCount={'2'}
        image={''}
      />
      <OwnerCard 
        id={'123'} 
        name={'Johanne Doe'} 
        email={'johanne@email.com'} 
        petCount={'2'}
        image={''}
      />
      <OwnerCard 
        id={'123'} 
        name={'Johanne Doe'} 
        email={'johanne@email.com'} 
        petCount={'2'}
        image={''}
      />
    </div>
  );
}

export default OwnerList;