import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const TopBar = (props) => {

  const { title, sendTo } = props; 

  return (
    <div className="page-top-bar">
      <p className="page-title">{title}</p>
      { sendTo ? 
      <span className="page-button">
        <Link to={sendTo}>
          <Button text="add new" type="dark" />
        </Link>
      </span>
      : "" }
    </div>
  )
}

export default TopBar;