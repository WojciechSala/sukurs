import React from 'react';
import styled from 'styled-components';

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

  a {
    padding-top: 10px;
    margin-right: 40vw;
  }
`;

const menuLinks = [
  'SKLEP',
  'KOLABORACJE',
  'O NAS',
  'KONTAKT',
  'OBSŁUGA KLIENTA',
  '© 2019 SUKURS'
];

const Menu = ({ isOpen }) => (
  <StyledMenu className="hamburger-menu" isOpen={isOpen}>
    {menuLinks.map(item => (
      <a key="item">{item}</a>
    ))}
  </StyledMenu>
);

export default Menu;
