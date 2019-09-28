import React from 'react';
import styled from 'styled-components';

const StyledProductForm = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ProductForm = props => {
  return (
    <StyledProductForm>
      <p>{props.name}</p>
      <p>{props.price} ZŁ</p>
    </StyledProductForm>
  );
};

export default ProductForm;
