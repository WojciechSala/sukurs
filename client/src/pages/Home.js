import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Icon from '@material-ui/core/Icon';
import bgHero from '../assets/images/person_1.jpg';
import { Link } from 'react-router-dom';

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

const StyledHero = styled.div`
  width: 100vw;
  height: 105vh;
  margin-top: -59px; /**height of navbar */
  background: url(${bgHero});
  background-size: cover;
`;

const Home = () => (
  <StyledHome>
    <Navbar />
    <StyledHero />
    <Products />
    <StyledShopLink>
      <Link to="shop" replace>
        ZOBACZ WIĘCEJ
        <Icon>chevron_right</Icon>
      </Link>
    </StyledShopLink>
  </StyledHome>
);

export default Home;
