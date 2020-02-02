import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-grid">
        <div className="navbar-item">
          <span className="navbar-icon">
            <FontAwesomeIcon icon="home" />
          </span>
          <br />
          <span className="navbar-icon-label">Home</span>
        </div>
        <div className="navbar-item">
          <span className="navbar-icon">
            <FontAwesomeIcon icon="paw" />
          </span>
          <br />
          <span className="navbar-icon-label">Pets</span>
        </div>
        <div className="navbar-item">
          <span className="navbar-icon">
            <FontAwesomeIcon icon="user-friends" />
          </span>
          <br />
          <span className="navbar-icon-label">People</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;