import React from 'react';
import './Navbar.scss';
import Menu from '../Menu/Menu.js';
import Icon from '@material-ui/core/Icon';

const Navbar = () => (
  <div className="nav">
    <Menu />
    <Icon className="basket">shopping_cart</Icon>
  </div>
);

export default Navbar;
