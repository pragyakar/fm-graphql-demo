import React from 'react';

const InfoBar = (props) => {

  const { label, data } = props;

  return (
    <div className="info-bar">
      <span className="info-bar-label">{label}</span>
      <span className="info-bar-data">{data}</span>
    </div>
  );
}

export default InfoBar;