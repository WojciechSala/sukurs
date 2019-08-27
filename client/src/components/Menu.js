import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.main};
  font-size: ${({ theme }) => theme.font.size.mobile.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s 0s ease-in-out;

  /* transform: translate(
    ${({ isOpen }) => (isOpen ? '0' : '-100%')},
    ${({ isOpen }) => (isOpen ? '0' : '-100%')}
  ); */

  a {
    padding-top: 10px;
    margin-right: 40vw;
  }
`;

const menuLinks = [
  { text: 'SKLEP', href: 'shop' },
  { text: 'KOLABORACJE', href: 'colabs' },
  { text: 'O NAS', href: 'about' },
  { text: 'KONTAKT', href: 'contact' },
  { text: 'OBSŁUGA KLIENTA', href: 'support' },
  { text: '© 2019 SUKURS', href: '' }
];

const Menu = ({ isOpen }) => (
  <StyledMenu isOpen={isOpen}>
    {menuLinks.map(item => (
      // eslint-disable-next-line
      <Link to={item.href} replace key="item">
        {item.text}
      </Link>
    ))}
  </StyledMenu>
);

export default Menu;
