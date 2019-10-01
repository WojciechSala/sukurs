import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './NavbarHamburger';
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
  const [isHamburgerOpen, setHamburgerState] = useState(false);

  const toggleHamburger = () => {
    setHamburgerState(!isHamburgerOpen);
  };

  console.log(location.search);
  return (
    <StyledNavbar>
      <Icon onClick={toggleHamburger}>
        {isHamburgerOpen ? 'arrow_back' : 'menu'}
      </Icon>
      <Icon id="basketIcon">shopping_cart</Icon>
      <Hamburger isOpen={isHamburgerOpen} />
    </StyledNavbar>
  );
};

export default Navbar;
