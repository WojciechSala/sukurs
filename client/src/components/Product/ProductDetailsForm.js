import React from 'react';
import styled from 'styled-components';

const StyledProductForm = styled.div`
  width: 100%;
  height: 100px;
`;

const StyledTopSection = styled.div`
  width: 100%;
  height: 60px;

  p {
    font-size: ${({ theme }) => theme.font.size.mobile.xs};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    width: 100px;
    margin: 5px 0;
    padding-left: 16px;

    :nth-child(2) {
      font-weight: ${({ theme }) => theme.font.weight.light};
    }
  }
`;

const StyledButton = styled.button`
  display: block;
  border: none;
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.font.family.roboto};
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  :hover {
    cursor: pointer;
  }

  span {
    display: block;
    margin: 0 auto;
  }
`;

const StyledSizes = styled.div`
  float: right;
  width: 200px;
  height: 36px;
  margin: -45px 16px 0 0;
`;

const StyledSize = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const ProductForm = props => {
  // console.log(props.sizes);
  return (
    <StyledProductForm>
      <StyledTopSection>
        <p>{props.name}</p>
        <p>{props.price} ZŁ</p>
        <StyledSizes>
          <StyledSize>{props.sizes}</StyledSize>
        </StyledSizes>
      </StyledTopSection>
      <StyledButton>
        <span>DODAJ DO KOSZYKA</span>
      </StyledButton>
    </StyledProductForm>
  );
};

export default ProductForm;
