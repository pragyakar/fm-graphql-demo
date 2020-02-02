import React from 'react';
import Button from '../Button';

const TopBar = (props) => {

  const { title, clickHandler } = props; 

  return (
    <div className="page-top-bar">
      <p className="page-title">{title}</p>
      <span className="page-button">
        <Button text="add new" type="dark" onClick={clickHandler} />
      </span>
    </div>
  )
}

export default TopBar;