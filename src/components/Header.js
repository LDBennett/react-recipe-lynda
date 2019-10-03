import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ children,...props }) => (
  <NavLink to="/"
    exact
    className="px1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
)

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">MyRecipes</h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: Proptypes.node,
}

export default Header;
