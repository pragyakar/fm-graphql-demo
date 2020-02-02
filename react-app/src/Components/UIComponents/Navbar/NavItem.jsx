import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const activeCheck = (route, path) => {
  const rootPathName = path.split('/')[1];
  const routeName = route.split('/')[1];
  
  if (routeName === rootPathName) {
    return 'active';
  } else {
    return '';
  }
}

const NavItem = (props) => {

  const { label, icon, route } = props;

  const { pathname } = useLocation();
  const active = activeCheck(route, pathname);
  
  return (
    <Link to={route}>
      <div className={`navbar-item ${active}`}>
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