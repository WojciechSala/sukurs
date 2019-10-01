import React from 'react';
import styled from 'styled-components';

const StyledCollaborators = styled.div`
  width: 100vw;
  height: calc(100% - 59px); /* 59px is a height of navbar */
`;

const Collaborators = () => {
  return <StyledCollaborators></StyledCollaborators>;
};

export default Collaborators;
