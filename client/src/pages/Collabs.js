import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Collaborators from '../components/Collaborators/Collaborators';

const StyledCollabs = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Collabs = () => {
  return (
    <StyledCollabs>
      <Navbar />
      <Collaborators />
    </StyledCollabs>
  );
};

export default Collabs;
