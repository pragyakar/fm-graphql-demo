import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {

  const { label, icon, route } = props;

  return (
    <Link to={route}>
      <div className="navbar-item">
        <span className="navbar-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <br />
        <span className="navbar-icon-label">{label}</span>
      </div>
    </Link>
  );
};

export default NavItem;