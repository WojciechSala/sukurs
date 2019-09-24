import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledProduct = styled.div`
  width: 150px;
  height: 200px;
  max-width: calc((100vw - 36px) / 2);
  font-size: ${({ theme }) => theme.font.size.mobile.xs};

  /* :nth-child(odd) {
    justify-self: start;
  }
  :nth-child(even) {
    justify-self: end;
  } */
`;

const StyledProductImage = styled.img`
  width: 100%;
  height: 160px;
  background-size: cover;
`;

const StyledProductInfo = styled.div`
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 0;
  }
`;

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageToRender: ''
    };
  }

  async componentDidMount() {
    const importedImageModule = await import(
      '../../../../server/uploads/products/' + this.props.image
    );

    await this.setState({
      // path to imported module HAS TO BE .default
      imageToRender: importedImageModule.default
    });
  }

  render() {
    return (
      <Link to={this.props.slug} replace>
        <StyledProduct>
          <StyledProductImage src={this.state.imageToRender} />
          <StyledProductInfo>
            <p>{this.props.name}</p>
            <p>{this.props.price} ZŁ</p>
          </StyledProductInfo>
        </StyledProduct>
      </Link>
    );
  }
}
export default Product;
