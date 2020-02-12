import React from 'react';

const OwnerInfo = (props) => {

  const { imageUrl, name, email, bio } = props;
  
  return (
    <div className="owner-details-box">
      <div className="owner-image">
        <img src={imageUrl} alt=""/>
      </div>
      <div className="owner-info">
        <span className="owner-info-name">{name}</span>
        <span className="owner-info-email">{email}</span>
        <span className="owner-info-bio">{bio}</span>
      </div>
    </div>
  );
}

export default OwnerInfo;