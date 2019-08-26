import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Icon from '@material-ui/core/Icon';

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: calc(100vw - 32px);
  background-color: transparent;
  padding: 16px;

  #basketIcon {
    float: right;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StyledNavbar>
      <Icon onClick={toggleMenu}>{isMenuOpen ? 'arrow_back' : 'menu'}</Icon>
      <Icon id="basketIcon">shopping_cart</Icon>
      <Menu isOpen={isMenuOpen} />
    </StyledNavbar>
  );
};

export default Navbar;
