import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Icon from '@material-ui/core/Icon';

const StyledHome = styled.div`
  height: '200vh';
  font-size: ${({ theme }) => theme.font.size.mobile.xs};
`;

const StyledShopLink = styled.a`
  float: right;
  margin: 50px 16px 30px 0;

  span {
    position: relative; /** icon is visible on menu because of relative position*/
    top: 8px;
    margin-left: 10px;
  }
`;

const Home = () => (
  <StyledHome>
    <Navbar />
    HERO
    <Products />
    <StyledShopLink>
      ZOBACZ WIĘCEJ
      <Icon>chevron_right</Icon>
    </StyledShopLink>
  </StyledHome>
);

export default Home;
