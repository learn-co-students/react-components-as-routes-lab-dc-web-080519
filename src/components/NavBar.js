import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={linkStyle}
        activeStyle={{background: 'darkblue'}}
        >
        Home
      </NavLink>
      <NavLink
        to='/movies'
        exact
        style={linkStyle}
        activeStyle={{background: 'darkblue'}}
        >
        Movies
      </NavLink>
      <NavLink
        to='/directors'
        exact
        style={linkStyle}
        activeStyle={{background: 'darkblue'}}
        >
        Directors
      </NavLink>
      <NavLink
        to='/actors'
        exact
        style={linkStyle}
        activeStyle={{background: 'darkblue'}}
        >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
