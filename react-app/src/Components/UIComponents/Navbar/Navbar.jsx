import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-grid">
        <NavItem label={'Home'} icon={'home'} route={'/'}/>
        <NavItem label={'Pets'} icon={'paw'} route={'/pets'}/>
        <NavItem label={'Owners'} icon={'user-friends'} route={'/owners'}/>
      </div> 
    </div>
  );
}

export default Navbar;